import type { PageServerLoad } from './$types';
import { getAllPosts } from '$lib/database/manager';
export const load: PageServerLoad = async () => {
	const posts = await getAllPosts();
	const recentPosts = posts.slice(0, 3);
	return {
		posts: recentPosts
	};
};
