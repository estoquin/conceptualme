import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, "..", "..", "..", "database", "myblog.db");

// Query fragments / variables
const SELECT_BASE = "SELECT id, title, slug, date, excerpt, content, tags, category, image FROM posts";
const ORDER_BY_DATE_DESC = " ORDER BY date DESC";

export type Post = {
	id: number;
	title: string;
	slug: string;
	date: string;
	excerpt?: string | null;
	content?: string | null;
	tags: string[];
	category?: string | null;
	image?: string | null;
};

// ================================================================================================
// ================================================================================================
// ================================================================================================
// Database utility functions (Level 0)

const safeParse = (s: any): string[] => {
	try {
		const result = typeof s === "string" ? JSON.parse(s) : s || [];
		return Array.isArray(result) ? result : [];
	} catch (err) {
		console.error("[db manager] safeParse error:", err);
		return [];
	}
};

function mapRowsToPosts(rows: any[]): Post[] {
	return rows.map(({ id, title, slug, date, excerpt, content, tags, category, image }: any) => {
		const parsedTags = safeParse(tags);
		return { id, title, slug, date, excerpt, content, tags: parsedTags, category, image } as Post;
	});
}


async function queryDatabase(sql: string, params: any[] = []): Promise<any[]> {
	const { default: Database } = await import("better-sqlite3");
	const db = new Database(dbPath, { readonly: true });
	try {
		const stmt = db.prepare(sql);
		const rows = stmt.all(...params);
		return rows;
	} finally {
		db.close();
	}
}

// ================================================================================================
// ================================================================================================
// ================================================================================================
// Post retrieval functions (Level 1)

export async function getAllPosts(): Promise<Post[]> {
	try {
		const rows = await queryDatabase(SELECT_BASE + ORDER_BY_DATE_DESC);
		return mapRowsToPosts(rows);
	} catch (err) {
		console.error("[db manager] getAllPosts failed:", err);
		throw err;
	}
}

export async function getLastPosts(limit = 3): Promise<Post[]> {
	try {
		const sql = SELECT_BASE + ORDER_BY_DATE_DESC + " LIMIT ?";
		const rows = await queryDatabase(sql, [limit]);
		return mapRowsToPosts(rows);
	} catch (err) {
		console.error("[db manager] getLastPosts failed:", err);
		throw err;
	}
}

export async function getPostsByFilter(options: { category?: string; tags?: string[] } = {}): Promise<Post[]> {
	const { category, tags } = options;
	try {
		const posts = await getAllPosts();
		const filtered = posts.filter((p) => {
			if (category && p.category !== category) return false;
			if (tags && tags.length > 0) {
				const hasAny = tags.some((t) => p.tags.includes(t));
				if (!hasAny) return false;
			}
			return true;
		});

		return filtered;
	} catch (err) {
		console.error("[db manager] getPostsByFilter failed:", err);
		throw err;
	}
}

// ================================================================================================
// ================================================================================================
// ================================================================================================
// Backwards-compatible alias (Level 2)


export const getLatestPosts = (limit = 5) => getLastPosts(limit);

export async function getPostBySlug(slug: string): Promise<Post | null> {
	try {
		const sql = SELECT_BASE + " WHERE slug = ? LIMIT 1";
		const rows = await queryDatabase(sql, [slug]);
		if (!rows || rows.length === 0) return null;
		const [row] = rows;
		const posts = mapRowsToPosts([row]);
		return posts[0] || null;
	} catch (err) {
		console.error("[db manager] getPostBySlug failed:", err);
		throw err;
	}
}