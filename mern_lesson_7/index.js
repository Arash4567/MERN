const fs = require("fs");
const superagent = require("superagent");

fs.readFile("./dog.txt", "utf-8", (err, data) => {
  console.log(`Izlanayotgan it: "${data}"`);
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
    //   console.log(res.body.message);
      fs.writeFile("./dog-img.txt", res.body.message, (err) => {
          console.log("Tasodifiy rasm manzili filega muvaffaqiyatli yozildi!");
      });
    });
});

/* Write this function (then catch) */
