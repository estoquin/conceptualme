import { queryDatabase, safeParse } from './manager';

export type Post = {
    id: number;
    title: string;
    slug: string;
    date: string;
    excerpt?: string | null;
    content?: string | null;
    tags: string[];
    category?: string | null;
    categorySlug?: string | null;
    categoryId?: number | null;
    image?: string | null;
};

const SELECT_BASE = "SELECT posts.id, posts.title, posts.slug, posts.date, posts.excerpt, posts.content, posts.tags, posts.image, categories.name AS category, categories.slug AS category_slug, categories.id AS category_id FROM posts LEFT JOIN categories ON posts.category_id = categories.id";
const ORDER_BY_DATE_DESC = " ORDER BY posts.date DESC";

const mapRowsToPosts = (rows: any[]): Post[] => {
    return rows.map(
        (r: any) =>
            ({
                id: r.id,
                title: r.title,
                slug: r.slug,
                date: r.date,
                excerpt: r.excerpt,
                content: r.content,
                tags: safeParse(r.tags),
                category: r.category || null,
                categorySlug: r.category_slug || null,
                categoryId: r.category_id || null,
                image: r.image || null,
            } as Post)
    );
}

export const getAllPosts = async (): Promise<Post[]> => {
    return mapRowsToPosts(await queryDatabase(SELECT_BASE + ORDER_BY_DATE_DESC));
}

export const getLastPosts = async (limit = 3): Promise<Post[]> => {
    return mapRowsToPosts(await queryDatabase(SELECT_BASE + ORDER_BY_DATE_DESC + " LIMIT $1", [limit]));
}

export const getPostsByFilter = async (options: { category?: string; tags?: string[] } = {}): Promise<Post[]> => {
    const { category, tags } = options;
    const rows = category
        ? await queryDatabase(SELECT_BASE + " WHERE categories.slug = $1 OR categories.name = $1" + ORDER_BY_DATE_DESC, [category])
        : await queryDatabase(SELECT_BASE + ORDER_BY_DATE_DESC);
    let posts = mapRowsToPosts(rows);
    if (tags && tags.length > 0) posts = posts.filter((p) => tags.some((t) => p.tags.includes(t)));
    return posts;
};

export const getLatestPosts = (limit = 5) => {
    return getLastPosts(limit);
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
    const rows = await queryDatabase(SELECT_BASE + " WHERE posts.slug = $1 LIMIT 1", [slug]);
    if (!rows || rows.length === 0) return null;
    return mapRowsToPosts([rows[0]])[0] || null;
};
