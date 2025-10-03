import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const postsDir = path.join(__dirname, '..', 'src', 'posts');

const files = fs.readdirSync(postsDir).filter(f=>f.endsWith('.md'));
const missing = [];
for (const f of files) {
  const content = fs.readFileSync(path.join(postsDir,f),'utf8');
  const frontEnd = content.indexOf('\n---', 3);
  if (frontEnd === -1) {
    missing.push(f + ' (no frontmatter end)');
    continue;
  }
  const front = content.slice(0, frontEnd+4);
  if (!/^image:\s*/m.test(front)) missing.push(f);
}
if (missing.length===0) {
  console.log('All files have image frontmatter');
} else {
  console.log('Missing image in', missing.length, 'files:');
  for (const m of missing) console.log('-', m);
}
