const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    res.end("HELLO from server!");
});

server.listen(8000, '127.0.0.1', () => {
    console.log("8000 port ishga tushdi!");
});