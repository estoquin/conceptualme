import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getAllCategories } from '$lib/database/categories';
import { queryDatabase } from '$lib/database/manager';

const slugify = (s: string) =>
	(String(s || '')).toLowerCase().replace(/[^a-z0-9\-]+/g, '-').replace(/^-+|-+$/g, '');

export const load: PageServerLoad = async () => {
	return { categories: await getAllCategories() };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const create = form.get('createCategory');
		const update = form.get('updateCategory');
		const del = form.get('deleteCategory');

		if (create) {
			const name = String(form.get('name') ?? '').trim();
			let slug = form.get('slug') ? String(form.get('slug')).trim() : '';
			if (name) {
				if (!slug) slug = slugify(name);
				await queryDatabase('INSERT INTO categories (name, slug) VALUES ($1, $2)', [name, slug]);
			}
			throw redirect(303, '/admin/categories');
		}

		if (update) {
			const id = Number(form.get('categoryId'));
			if (!isNaN(id)) {
				const name = String(form.get('name') ?? '').trim();
				let slug = form.get('slug') ? String(form.get('slug')).trim() : '';
				if (name) {
					if (!slug) slug = slugify(name);
					await queryDatabase('UPDATE categories SET name = $1, slug = $2 WHERE id = $3', [name, slug, id]);
				}
			}
			throw redirect(303, '/admin/categories');
		}

		if (del) {
			const id = Number(del);
			if (!isNaN(id) && id !== 1) {
				await queryDatabase('UPDATE posts SET category_id = 1 WHERE category_id = $1', [id]);
				await queryDatabase('DELETE FROM categories WHERE id = $1', [id]);
			}
			throw redirect(303, '/admin/categories');
		}

		return {};
	}
};
