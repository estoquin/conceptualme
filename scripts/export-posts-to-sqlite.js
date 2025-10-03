import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const postsDir = path.join(__dirname, '..', 'src', 'posts');
const outFile = path.join(__dirname, '..', 'database', 'app.sql');

function parseFrontmatter(content) {
  try {
    const parsed = matter(content);
    return {front: parsed.data || {}, body: parsed.content || ''};
  } catch (e) {
    // Fallback: parse common keys line-by-line to be tolerant of malformed YAML
    const fm = {};
    const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
    const frontText = m ? m[1] : '';
    for (const line of frontText.split(/\r?\n/)) {
      const kv = line.split(/:\s+/);
      if (kv.length < 2) continue;
      const key = kv.shift().trim();
      const value = kv.join(': ').trim();
      // simple handling for lists like [a,b]
      if (/^\[.*\]$/.test(value)) {
        try { fm[key] = JSON.parse(value.replace(/([\w-]+)(?=,|\])/g, '"$1"').replace(/'/g,'"')); } catch { fm[key]=value; }
      } else {
        fm[key] = value.replace(/^['"]|['"]$/g, '');
      }
    }
    const body = m ? content.slice(m[0].length).trim() : content;
    return {front: fm, body};
  }
}

function sqliteEscape(s) {
  if (s === null || s === undefined) return 'NULL';
  return "'" + String(s).replace(/'/g, "''") + "'";
}

function toJsonString(v) {
  try {
    return JSON.stringify(v);
  } catch (e) {
    return '[]';
  }
}

const files = fs.readdirSync(postsDir).filter(f=>f.endsWith('.md'));
let rows = [];
for (const f of files) {
  const full = fs.readFileSync(path.join(postsDir, f),'utf8');
  const {front, body} = parseFrontmatter(full);
  const title = front && front.title ? front.title : path.basename(f, '.md');
  const slug = front && front.slug ? front.slug : path.basename(f, '.md');
  const date = front && front.date ? front.date : null;
  const excerpt = front && front.excerpt ? front.excerpt : null;
  const tags = front && front.tags ? front.tags : [];
  const category = front && front.category ? front.category : null;
  const image = front && front.image ? front.image : null;
  const content = body || '';
  rows.push({title, slug, date, excerpt, content, tags, category, image});
}

let sql = "PRAGMA foreign_keys=OFF;\nBEGIN TRANSACTION;\n\n";
sql += `CREATE TABLE IF NOT EXISTS posts (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  title TEXT,\n  slug TEXT UNIQUE,\n  date TEXT,\n  excerpt TEXT,\n  content TEXT,\n  tags TEXT,\n  category TEXT,\n  image TEXT\n);\n\n`;
for (const r of rows) {
  const fields = [
    sqliteEscape(r.title),
    sqliteEscape(r.slug),
    sqliteEscape(r.date),
    sqliteEscape(r.excerpt),
    sqliteEscape(r.content),
    sqliteEscape(toJsonString(r.tags)),
    sqliteEscape(r.category),
    sqliteEscape(r.image),
  ];
  sql += `INSERT INTO posts (title, slug, date, excerpt, content, tags, category, image) VALUES (${fields.join(', ')});\n`;
}
sql += `\nCOMMIT;\n`;

fs.writeFileSync(outFile, sql, 'utf8');
console.log('Wrote', outFile, 'with', rows.length, 'posts.');
