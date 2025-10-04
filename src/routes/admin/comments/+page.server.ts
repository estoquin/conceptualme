import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getAllComments, deleteComment } from '$lib/database/comments';

export const load: PageServerLoad = async () => {
	return {
		comments: await getAllComments()
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const del = form.get('deleteComment');

		if (del) {
			const id = Number(del);
			if (!isNaN(id)) {
				await deleteComment(id);
			}
			throw redirect(303, '/admin/comments');
		}

		return {};
	}
};
