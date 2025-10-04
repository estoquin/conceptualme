import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getAllTags, createTag, updateTag, deleteTag } from '$lib/database/tags';

export const load: PageServerLoad = async () => {
	return {
		tags: await getAllTags()
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const create = form.get('createTag');
		const update = form.get('updateTag');
		const del = form.get('deleteTag');

		if (create) {
			const name = String(form.get('name') ?? '').trim();
			const slug = form.get('slug') ? String(form.get('slug')).trim() : undefined;
			if (name) {
				await createTag(name, slug);
			}
			throw redirect(303, '/admin/tags');
		}

		if (update) {
			const id = Number(form.get('tagId'));
			if (!isNaN(id)) {
				const name = String(form.get('name') ?? '').trim();
				const slug = form.get('slug') ? String(form.get('slug')).trim() : undefined;
				await updateTag(id, { name: name || undefined, slug: slug || undefined });
			}
			throw redirect(303, '/admin/tags');
		}

		if (del) {
			const id = Number(del);
			if (!isNaN(id)) {
				await deleteTag(id);
			}
			throw redirect(303, '/admin/tags');
		}

		return {};
	}
};