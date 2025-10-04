import { queryDatabase } from './manager';

export type Comment = {
	id: number;
	postId: number;
	postTitle?: string | null;
	postSlug?: string | null;
	author: string | null;
	email?: string | null;
	content: string;
	createdAt: string;
};

// ================= existing helpers for per-post operations ====================
export const getCommentsForPost = async (postId: number): Promise<Comment[]> => {
	const rows = await queryDatabase(
		'SELECT id, post_id AS "postId", author, email, content, created_at AS "createdAt" FROM comments WHERE post_id = $1 ORDER BY created_at ASC',
		[postId]
	);
	return rows.map((r: any) => ({
		id: r.id,
		postId: r.postId,
		author: r.author,
		email: r.email,
		content: r.content,
		createdAt: r.createdAt
	}));
};

export const createComment = async (postId: number, author: string | null, email: string | null, content: string): Promise<void> => {
	await queryDatabase(
		'INSERT INTO comments (post_id, author, email, content, created_at) VALUES ($1, $2, $3, $4, now())',
		[postId, author, email, content]
	);
};

// ================= new helpers for admin ===================================

// get all comments with post info (for admin)
export const getAllComments = async (): Promise<Comment[]> => {
	const rows = await queryDatabase(
		`SELECT c.id, c.post_id AS "postId", p.title AS post_title, p.slug AS post_slug,
		        c.content, c.created_at AS "createdAt"
		   FROM comments c
		   JOIN posts p ON p.id = c.post_id
		  ORDER BY c.created_at DESC`
	);
	return rows.map((r: any) => ({
		id: r.id,
		postId: r.postId,
		postTitle: r.post_title || null,
		postSlug: r.post_slug || null,
		author: r.author ?? null,
		email: r.email ?? null,
		content: r.content,
		createdAt: r.createdAt
	}));
};

export const deleteComment = async (id: number): Promise<void> => {
	await queryDatabase('DELETE FROM comments WHERE id = $1', [id]);
};
