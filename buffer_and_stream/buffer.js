const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const FILE_PATH = path.join(__dirname, 'bigdata.text');

const server = http.createServer((req, res) => {
    // Set proper headers
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    const readStream = fs.createReadStream(FILE_PATH, 'utf8');

    // Handle stream errors
    readStream.on('error', (error) => {
        console.error('File Read Error:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error: Could not read file');
    });

    // Pipe content to response
    readStream.pipe(res);
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
    console.log(`Open http://localhost:${PORT}/ to view`);
});
