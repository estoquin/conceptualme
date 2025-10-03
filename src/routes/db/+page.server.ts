import { getLatestPosts } from "../../lib/database/manager";

export const load = async () => {
    try {
        const posts = await getLatestPosts(5);
        return { posts };
    } catch (err) {
        console.error("[db +page.server] Failed to read database:", err);
        return { posts: [], error: "Failed to read database" };
    }
};
