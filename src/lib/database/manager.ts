import { Pool } from "pg";
import fs from "fs";
import path from "path";

import dotenv from "dotenv";
dotenv.config();

const ENV_PATH = path.join(process.cwd(), ".env");

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
export const pool = buildPool();

export const queryDatabase = async (sql: string, params: any[] = []): Promise<any[]> => {
    const client = await pool.connect();
    try {
        const res = await client.query(sql, params);
        return res.rows || [];
    } finally {
        client.release();
    }
};

export const safeParse = (s: any): string[] => {
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
