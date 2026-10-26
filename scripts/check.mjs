import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fr from '../content/fr.mjs';
import en from '../content/en.mjs';
const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const expected = ['index.html','404.html','robots.txt','sitemap.xml','assets/tokens.css','assets/site.css','assets/main.js',...['favicon.svg','operations-map.svg','document-flow.svg','zine-tms.png','win-tms.png','gamma-transit.png','fuel-tracking.png','cv-mohammed-reda-saadi.pdf'].map(x => `assets/${x}`)];
for (const data of [fr,en]) {
  expected.push(`${data.locale}/index.html`);
  for (const project of data.projects) expected.push(`${data.locale}/${data.locale === 'fr' ? 'projets' : 'projects'}/${project.slug}/index.html`);
}
for (const relative of expected) await stat(path.join(dist,relative));
for (const relative of expected.filter(x => x.endsWith('.html') && x !== 'index.html')) {
  const html = await readFile(path.join(dist,relative),'utf8');
  if (!html.includes('<main') || !html.includes('<h1')) throw new Error(`Missing semantic content: ${relative}`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"]+)"/g)) {
    const clean = match[1].split('#')[0];
    if (!clean) continue;
    const target = path.join(dist,clean, clean.endsWith('/') ? 'index.html' : '');
    await stat(target).catch(() => { throw new Error(`Broken link ${clean} in ${relative}`); });
  }
}
console.log(`Checked ${expected.length} files and internal links.`);
