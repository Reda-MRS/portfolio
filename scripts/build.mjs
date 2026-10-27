import { mkdir, rm, writeFile, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fr from '../content/fr.mjs';
import en from '../content/en.mjs';
import { renderProject, render404 } from './render.mjs';
import { renderHome } from './home.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const originValue = process.env.PORTFOLIO_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || 'http://localhost:4173';
let origin;
try {
  origin = new URL(/^https?:\/\//.test(originValue) ? originValue : `https://${originValue}`).origin;
} catch { throw new Error(`Invalid site URL: ${originValue}`); }
const locales = [fr,en];
const paths = [];
await rm(dist, { recursive:true, force:true });
await mkdir(dist, { recursive:true });
async function output(urlPath, html) {
  const target = path.join(dist, urlPath.replace(/^\//,''), 'index.html');
  await mkdir(path.dirname(target), { recursive:true });
  await writeFile(target, html, 'utf8');
  paths.push(urlPath);
}
for (const data of locales) {
  if (data.projects.length !== 4) throw new Error(`Expected four projects for ${data.locale}`);
  await output(`/${data.locale}/`, renderHome(data));
  for (const project of data.projects) await output(`/${data.locale}/${data.locale === 'fr' ? 'projets' : 'projects'}/${project.slug}/`, renderProject(data,project));
}
await writeFile(path.join(dist,'index.html'), '<!doctype html><html lang="fr"><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/fr/"><title>Portfolio</title><a href="/fr/">Portfolio →</a></html>');
await writeFile(path.join(dist,'404.html'), render404(fr));
await writeFile(path.join(dist,'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile(path.join(dist,'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p => `<url><loc>${origin}${p}</loc></url>`).join('')}</urlset>`);
await mkdir(path.join(dist,'assets'), { recursive:true });
for (const [from,to] of [['src/styles/tokens.css','tokens.css'],['src/styles/site.css','site.css'],['src/styles/home.css','home.css'],['src/scripts/main.js','main.js']]) await cp(path.join(root,from),path.join(dist,'assets',to));
for (const file of ['favicon.svg','operations-map.svg','document-flow.svg','zine-tms.png','win-tms.png','gamma-transit.png','fuel-tracking.png','cv-mohammed-reda-saadi.pdf']) await cp(path.join(root,'src/assets',file),path.join(dist,'assets',file));
console.log(`Built ${paths.length} pages in dist/`);
