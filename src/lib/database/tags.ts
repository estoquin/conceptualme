import { queryDatabase } from './manager';

export type Tag = {
	id: number;
	name: string;
	slug: string;
};

const slugify = (s: string) =>
	(String(s || '')).toLowerCase().trim().replace(/[^a-z0-9\-]+/g, '-').replace(/^-+|-+$/g, '');

export const getAllTags = async (): Promise<Tag[]> => {
	const rows = await queryDatabase('SELECT id, name, slug FROM tags ORDER BY lower(name)');
	return rows.map((r: any) => ({ id: r.id, name: r.name, slug: r.slug }));
};

export const getTagById = async (id: number): Promise<Tag | null> => {
	const rows = await queryDatabase('SELECT id, name, slug FROM tags WHERE id = $1 LIMIT 1', [id]);
	if (!rows || rows.length === 0) return null;
	const r = rows[0];
	return { id: r.id, name: r.name, slug: r.slug };
};

export const getTagBySlug = async (slug: string): Promise<Tag | null> => {
	const rows = await queryDatabase('SELECT id, name, slug FROM tags WHERE slug = $1 LIMIT 1', [slug]);
	if (!rows || rows.length === 0) return null;
	const r = rows[0];
	return { id: r.id, name: r.name, slug: r.slug };
};

// create a tag (returns the new or existing id)
export const createTag = async (name: string, slug?: string): Promise<Tag> => {
	const s = slug && slug.trim() !== '' ? slug : slugify(name);
	const rows = await queryDatabase(
		'INSERT INTO tags (name, slug) VALUES ($1, $2) ON CONFLICT (name) DO UPDATE SET slug = EXCLUDED.slug RETURNING id, name, slug',
		[name, s]
	);
	const r = rows[0];
	return { id: r.id, name: r.name, slug: r.slug };
};

export const updateTag = async (id: number, data: { name?: string; slug?: string }): Promise<void> => {
	const { name, slug } = data;
	if (!name && !slug) return;
	const parts: string[] = [];
	const params: any[] = [];
	let idx = 1;
	if (name) {
		parts.push(`name = $${idx++}`);
		params.push(name);
	}
	if (slug) {
		parts.push(`slug = $${idx++}`);
		params.push(slug);
	}
	params.push(id);
	const sql = `UPDATE tags SET ${parts.join(', ')} WHERE id = $${idx}`;
	await queryDatabase(sql, params);
};

export const deleteTag = async (id: number): Promise<void> => {
	// post_tags has ON DELETE CASCADE on tag_id, so deleting tag will remove associations
	await queryDatabase('DELETE FROM tags WHERE id = $1', [id]);
};

// post_tags helpers

export const getTagsForPost = async (postId: number): Promise<Tag[]> => {
	const rows = await queryDatabase(
		'SELECT t.id, t.name, t.slug FROM tags t JOIN post_tags pt ON pt.tag_id = t.id WHERE pt.post_id = $1 ORDER BY t.name',
		[postId]
	);
	return rows.map((r: any) => ({ id: r.id, name: r.name, slug: r.slug }));
};

export const addTagToPost = async (postId: number, tagId: number): Promise<void> => {
	await queryDatabase('INSERT INTO post_tags (post_id, tag_id) VALUES ($1, $2) ON CONFLICT DO NOTHING', [
		postId,
		tagId
	]);
};

export const removeTagFromPost = async (postId: number, tagId: number): Promise<void> => {
	await queryDatabase('DELETE FROM post_tags WHERE post_id = $1 AND tag_id = $2', [postId, tagId]);
};

// ensure tags exist (create if missing) and return their ids
export const ensureTags = async (names: string[]): Promise<number[]> => {
	const ids: number[] = [];
	for (const raw of names) {
		const name = String(raw).trim();
		if (!name) continue;
		const s = slugify(name);
		// upsert by name, return id
		const rows = await queryDatabase(
			'INSERT INTO tags (name, slug) VALUES ($1, $2) ON CONFLICT (name) DO UPDATE SET slug = EXCLUDED.slug RETURNING id',
			[name, s]
		);
		if (rows && rows.length > 0) {
			ids.push(rows[0].id);
		} else {
			// fallback: select id
			const found = await queryDatabase('SELECT id FROM tags WHERE name = $1 LIMIT 1', [name]);
			if (found && found.length > 0) ids.push(found[0].id);
		}
	}
	return ids;
};

// replace all tags for a post (create missing tags, then set associations)
export const setTagsForPost = async (postId: number, tagNames: string[]): Promise<void> => {
	const ids = await ensureTags(tagNames);
	// remove existing associations
	await queryDatabase('DELETE FROM post_tags WHERE post_id = $1', [postId]);
	// bulk insert new associations
	for (const tagId of ids) {
		await queryDatabase('INSERT INTO post_tags (post_id, tag_id) VALUES ($1, $2) ON CONFLICT DO NOTHING', [
			postId,
			tagId
		]);
	}
};
