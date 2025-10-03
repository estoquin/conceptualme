import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.join(__dirname, '..', 'src', 'posts');

function getSeedFromSlug(content, filename) {
  const m = content.match(/^[ \t]*slug:\s*(.+)$/m);
  if (m) return m[1].trim().replace(/['"]/g, '');
  const titleMatch = content.match(/^[ \t]*title:\s*(.+)$/m);
  if (titleMatch) return titleMatch[1].trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return path.basename(filename, '.md');
}

function processFile(file) {
  const fp = path.join(postsDir, file);
  let content = fs.readFileSync(fp, 'utf8');
  if (!content.startsWith('---')) return;
  const endIdx = content.indexOf('\n---', 3);
  if (endIdx === -1) return;
  const front = content.slice(0, endIdx + 4);
  if (/^image:\s*/m.test(front)) return; // already has image
  const seed = getSeedFromSlug(front + '\n', file) || path.basename(file, '.md');
  const imageLine = `image: https://picsum.photos/seed/${encodeURIComponent(seed)}/800/400\n`;
  const newFront = front.replace(/\n---\s*$/, '\n' + imageLine + '---\n');
  const rest = content.slice(endIdx + 4);
  fs.writeFileSync(fp, newFront + rest, 'utf8');
  console.log('Updated', file);
}

for (const f of fs.readdirSync(postsDir)) {
  if (f.endsWith('.md')) processFile(f);
}
