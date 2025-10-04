import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/database/posts';
import { getCommentsForPost, createComment } from '$lib/database/comments';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;
	const post = await getPostBySlug(slug);
	if (!post) {
		// Post not found — redirect back to posts index
		throw redirect(303, '/posts');
	}
	const comments = await getCommentsForPost(post.id);
	return { post, comments };
};

export const actions: Actions = {
	default: async ({ request, params }) => {
		const slug = params.slug;
		const post = await getPostBySlug(slug);
		if (!post) throw redirect(303, '/posts');

		const form = await request.formData();
		const author = form.get('author') ? String(form.get('author')).trim() : null;
		const email = form.get('email') ? String(form.get('email')).trim() : null;
		const content = form.get('content') ? String(form.get('content')).trim() : '';

		if (!content) {
			// nothing to save — redirect back
			throw redirect(303, `/posts/${slug}`);
		}

		await createComment(post.id, author, email, content);
		throw redirect(303, `/posts/${slug}`);
	}
};
