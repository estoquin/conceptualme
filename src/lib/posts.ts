export interface Post {
	title: string;
	slug: string;
	date: string;
	excerpt: string;
	image: string;
	content: string;
}

export interface PostMetadata {
	title: string;
	slug: string;
	date: string;
	excerpt: string;
	image: string;
}

/**
 * Parse markdown frontmatter and content
 */
export function parseMarkdown(markdown: string): { metadata: PostMetadata; content: string } {
	const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
	const match = markdown.match(frontmatterRegex);
	if (!match) {
		throw new Error('Invalid markdown format: missing frontmatter');
	}
	const [, frontmatter, content] = match;
	const metadata: any = {};
	frontmatter.split('\n').forEach((line) => {
		const [key, ...valueParts] = line.split(':');
		if (key && valueParts.length > 0) {
			metadata[key.trim()] = valueParts.join(':').trim();
		}
	});

	return {
		metadata: metadata as PostMetadata,
		content: content.trim()
	};
}

/**
 * Simple markdown to HTML converter (basic implementation)
 */
export function markdownToHtml(markdown: string): string {
	let html = markdown;
	html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>');
	html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>');
	html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');
	html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>');
	html = html.replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>');
	html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');
	html = html.replace(/^\s*(\n)?(.+)/gim, function (match) {
		return match.trim().match(/^</) ? match : '<p class="mb-4 leading-relaxed">' + match + '</p>';
	});
	html = html.replace(/\n\n/g, '\n');
	return html;
}

/**
 * Get all posts from markdown files
 */
export async function getAllPosts(): Promise<Post[]> {
	const postFiles = import.meta.glob('/src/posts/*.md', { as: 'raw' });
	const posts: Post[] = [];
	for (const path in postFiles) {
		const markdown = await postFiles[path]();
		const { metadata, content } = parseMarkdown(markdown);
		posts.push({
			...metadata,
			content: markdownToHtml(content)
		});
	}
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return posts;
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
	const posts = await getAllPosts();
	return posts.find((post) => post.slug === slug) || null;
}
