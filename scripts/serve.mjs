import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.pdf':'application/pdf','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8'};
http.createServer(async (req,res) => {
  try {
    const url = new URL(req.url,'http://localhost');
    if (url.pathname === '/') { res.writeHead(302,{Location:'/fr/'}); res.end(); return; }
    const decoded = decodeURIComponent(url.pathname);
    const target = path.resolve(dist, '.' + decoded, decoded.endsWith('/') ? 'index.html' : '');
    if (!target.startsWith(dist + path.sep)) throw new Error('Invalid path');
    let file = target;
    if ((await stat(target)).isDirectory()) file = path.join(target,'index.html');
    const body = await readFile(file);
    res.writeHead(200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream','X-Content-Type-Options':'nosniff'}); res.end(body);
  } catch { res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'}); res.end(await readFile(path.join(dist,'404.html'))); }
}).listen(4173,'127.0.0.1',() => console.log('Portfolio preview: http://127.0.0.1:4173/fr/'));
