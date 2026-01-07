const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    else if (req.url === '/about') {
        res.write('About Page');
        res.end();
    }
    else {
        res.write('Page Not Found');
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('New connection...');
});

server.listen(3000);

console.log('Listening on port 3000...');
