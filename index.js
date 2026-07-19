const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT) || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
	'.html': 'text/html; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.js': 'application/javascript; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.gif': 'image/gif',
	'.svg': 'image/svg+xml',
	'.webp': 'image/webp',
	'.ico': 'image/x-icon'
};

function resolvePath(urlPath) {
	const normalized = urlPath === '/' ? '/index.html' : urlPath;
	let decoded;

	try {
		decoded = decodeURIComponent(normalized.split('?')[0]);
	} catch {
		return null;
	}

	const targetPath = path.normalize(path.join(ROOT_DIR, decoded));

	if (!targetPath.startsWith(ROOT_DIR)) {
		return null;
	}

	return targetPath;
}

const server = http.createServer((req, res) => {
	if ((req.url || '').split('?')[0] === '/health') {
		res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
		res.end(JSON.stringify({ ok: true }));
		return;
	}

	const targetPath = resolvePath(req.url || '/');

	if (!targetPath) {
		res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
		res.end('Forbidden');
		return;
	}

	fs.stat(targetPath, (statErr, stats) => {
		if (statErr || !stats.isFile()) {
			res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
			res.end('Not Found');
			return;
		}

		const ext = path.extname(targetPath).toLowerCase();
		const contentType = MIME_TYPES[ext] || 'application/octet-stream';

		res.writeHead(200, { 'Content-Type': contentType });
		fs.createReadStream(targetPath).pipe(res);
	});
});

server.listen(PORT, () => {
	console.log(`Portfolio server listening on port ${PORT}`);
});
