import type { PageServerLoad } from './$types';
import { getAllPosts } from '$lib/posts';

export const load: PageServerLoad = async () => {
	const posts = await getAllPosts();
	// Get only the 3 most recent posts for the home page
	const recentPosts = posts.slice(0, 3);
	
	return {
		posts: recentPosts
	};
};
