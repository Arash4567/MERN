const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName == "/" || pathName == "/index") {
        res.end("Bosh sahifa!");
    } else if (pathName == "/user" ) {
        res.end("Foydalanuvchi sahifasi!");
    } else if (pathName == "/register" ) {
        res.end("Ro`yhatdan o`tish sahifasi!");
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("8000 port ishga tushdi!");
});