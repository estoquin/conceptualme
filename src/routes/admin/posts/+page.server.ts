import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getAllPosts } from '$lib/database/posts';
import { getAllCategories } from '$lib/database/categories';
import { queryDatabase } from '$lib/database/manager';

const slugify = (s: string) =>
	(String(s || '')).toLowerCase().replace(/[^a-z0-9\-]+/g, '-').replace(/^-+|-+$/g, '');

export const load: PageServerLoad = async () => {
	return {
		posts: await getAllPosts(),
		categories: await getAllCategories()
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const create = form.get('createPost');
		const update = form.get('updatePost');
		const del = form.get('deletePost');

		if (create) {
			const title = String(form.get('title') ?? '').trim();
			const excerpt = form.get('excerpt') ? String(form.get('excerpt')) : null;
			const categoryId = form.get('categoryId') ? Number(form.get('categoryId')) : 1;
			if (title) {
				const slug = slugify(title);
				await queryDatabase(
					'INSERT INTO posts (title, slug, date, excerpt, category_id, tags) VALUES ($1, $2, now(), $3, $4, $5)',
					[title, slug, excerpt, categoryId, '[]']
				);
			}
			throw redirect(303, '/admin/posts');
		}

		if (update) {
			const id = Number(form.get('postId'));
			if (!isNaN(id)) {
				const title = String(form.get('title') ?? '').trim();
				const excerpt = form.get('excerpt') ? String(form.get('excerpt')) : null;
				const categoryId = form.get('categoryId') ? Number(form.get('categoryId')) : 1;
				const slug = title ? slugify(title) : undefined;
				const params = slug ? [title, excerpt, categoryId, slug, id] : [title, excerpt, categoryId, id];
				const sql = slug
					? 'UPDATE posts SET title = $1, excerpt = $2, category_id = $3, slug = $4 WHERE id = $5'
					: 'UPDATE posts SET title = $1, excerpt = $2, category_id = $3 WHERE id = $4';
				await queryDatabase(sql, params as any[]);
			}
			throw redirect(303, '/admin/posts');
		}

		if (del) {
			const id = Number(del);
			if (!isNaN(id)) {
				await queryDatabase('DELETE FROM posts WHERE id = $1', [id]);
			}
			throw redirect(303, '/admin/posts');
		}

		return {};
	}
};
