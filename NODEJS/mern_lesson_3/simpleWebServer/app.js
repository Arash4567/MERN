const fs = require('fs');
const http = require('http');
const url = require('url');

const index = fs.readFileSync(`${__dirname}/frontend/index.html`, 'utf-8');
const user = fs.readFileSync(`${__dirname}/frontend/user.html`, 'utf-8');
const login = fs.readFileSync(`${__dirname}/frontend/login.html`, 'utf-8');
const notFound = fs.readFileSync(`${__dirname}/frontend/not-found.html`, 'utf-8');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    /* index page */
    if (pathName == "/" || pathName == "/index") {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(index);
    } else if (pathName == "/user") {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(user);
    } else if (pathName == "/login") {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(login);
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end(notFound);
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("8000 port ishga tushdi!");
});