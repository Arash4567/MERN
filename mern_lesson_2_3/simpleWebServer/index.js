const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    res.end("<h1>HELLO from server!</h1>");
});

server.listen(7777, '127.0.0.1', () => {
    console.log("7777 port ishga tushdi!");
});