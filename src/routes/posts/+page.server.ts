import type { PageServerLoad } from './$types';
import { getAllPosts } from '$lib/posts';

export const load: PageServerLoad = async () => {
	const posts = await getAllPosts();
	
	return {
		posts
	};
};
