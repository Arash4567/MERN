// const server = require("http");
// const url = require("url");

// const serverBody = server.createServer((req, res) => {
//   const pathName = req.url;
//   if (pathName == "/") {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     res.end("Home Page");
//   } else if (pathName == "/user") {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     res.end("Foydalanuvchilar");
//   } else {
//     res.writeHead(404, {
//       "Content-Type": "text/html",
//     });
//     res.end("Sahifa topilmadi!");
//   }
// });

// serverBody.listen(5000, "127.0.0.1", () => {
//     console.log("Server ishga tushdi...");
// });

const express = require('express')
const app = express()
app.get("/", (req, res) => {
    res.send("Home Page");
});
app.get("/user", (req, res) => {
    res.send("Foydalanuvchi");
});
app.get("*", (req, res) => {
    res.send("Sahifa topilmadi!");
});
app.listen(3000, "127.0.0.1", () => {
    console.log("Server 3000 chi portda ishga tushdi...");
});