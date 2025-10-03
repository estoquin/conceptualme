import { Pool } from "pg";
import fs from "fs";
import path from "path";

import dotenv from "dotenv";
dotenv.config();

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

export type Category = { 
    id: number;
    name: string;
    slug: string;
};

const ENV_PATH = path.join(process.cwd(), ".env");
const SELECT_BASE = "SELECT posts.id, posts.title, posts.slug, posts.date, posts.excerpt, posts.content, posts.tags, posts.image, categories.name AS category, categories.slug AS category_slug, categories.id AS category_id FROM posts LEFT JOIN categories ON posts.category_id = categories.id";
const ORDER_BY_DATE_DESC = " ORDER BY posts.date DESC";

const logConfig = () => {
    console.info("[db manager] .env exists:", fs.existsSync(ENV_PATH));
};
const buildPool = (): Pool => {
    const conn = process.env.DATABASE_URL;
    if (conn && typeof conn !== "string") throw new Error("DATABASE_URL must be a string");
    if (conn) {
        const cfg: any = { connectionString: conn };
        if (process.env.PGSSLMODE === "require" || process.env.FORCE_SSL === "true") cfg.ssl = { rejectUnauthorized: false };
        return new Pool(cfg);
    }
    if (typeof process.env.PGPASSWORD !== "undefined" && typeof process.env.PGPASSWORD !== "string") {
        throw new Error("PGPASSWORD must be a string");
    }
    const cfg: any = {
        host: process.env.PGHOST || undefined,
        port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : undefined,
        user: process.env.PGUSER || undefined,
        password: process.env.PGPASSWORD || undefined,
        database: process.env.PGDATABASE || undefined,
    };
    if (process.env.PGSSLMODE === "require" || process.env.FORCE_SSL === "true") cfg.ssl = { rejectUnauthorized: false };
    return new Pool(cfg);
};

logConfig();
const pool = buildPool();

// ===============================================================================================
// ===============================================================================================
// ===============================================================================================
// Database Utils

const safeParse = (s: any): string[] => {
    try {
        if (!s) return [];
        if (Array.isArray(s)) return s;
        if (typeof s === "object") return Array.isArray(s) ? s : [];
        const result = JSON.parse(s);
        return Array.isArray(result) ? result : [];
    } catch {
        return [];
    }
};

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

const queryDatabase = async (sql: string, params: any[] = []): Promise<any[]> => {
    const client = await pool.connect();
    try {
        const res = await client.query(sql, params);
        return res.rows || [];
    } finally {
        client.release();
    }
};

// ===============================================================================================
// ===============================================================================================
// ===============================================================================================
// Post and Category Management

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

export const getAllCategories = async (): Promise<Category[]> => {
    const rows = await queryDatabase("SELECT id, name, slug FROM categories ORDER BY lower(name)");
    return rows.map((r: any) => ({ id: r.id, name: r.name, slug: r.slug }));
};
