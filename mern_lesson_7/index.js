const fs = require("fs");
// const http = require("http");
// const url = require("url");
const superagent = require("superagent");

// fs.readFile("./dog.txt", "utf-8", (err, data) => {
//   console.log(`Izlanayotgan it: "${data}"`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       // console.log(res.body);
//       fs.writeFile("./dog-img.txt", res.body.message, (err) => {
//           console.log("Tasodifiy rasm manzili filega muvaffaqiyatli yozildi!");
//       });
//     });
// });

fs.readFile("./dog.txt", "utf-8", (err, data) => {
  console.log(`Izlanayotgan it: "${data}"`);
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/rando`)
    .then((res) => {
      // console.log(res.body);
      fs.writeFile("./dog-img.txt", res.body.message, (err) => {
          console.log("Tasodifiy rasm manzili filega muvaffaqiyatli yozildi!");
      });
    }).catch((err) => {
      console.log(`Xatolik: ${err}`);
    });
});

/* Write this function (then catch) */

// const server = http.createServer((req, res) => {
//   const pathName = req.url;

//   if (pathName == "/") {
//     res.writeHead(200,
//       {
//         "Content-type": "text/html"
//       }
//     );
//     res.end("file")
//   }
// });

// server.listen(8000, '127.0.0.1', () => {
//   console.log("Server ishga tushdi....");
// });

