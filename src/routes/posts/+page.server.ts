import type { PageServerLoad } from './$types';
import { getAllPosts } from '$lib/database/manager';
import { getPostsByFilter } from '$lib/database/manager';

export const load: PageServerLoad = async ({ url }) => {
	const category = url.searchParams.get('category');
	if (category) {
		const posts = await getPostsByFilter({ category });
		return { posts, category };
	}
	const posts = await getAllPosts();
	return { posts };
};
