const express = require("express");
const app = express();
const fs = require("fs");
const url = require('url');
const superagent = require("superagent");

const indexTemp = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
const answerTemp = fs.readFileSync(`${__dirname}/answer.html`, "utf-8");

function getImage(data, temp) {
    superagent
        .get(`https://dog.ceo/api/breed/${data}/images/random`)
        .then((res) => {
            let output = temp.replace("{$DATA$}", res.body.message);
            output = output.replace('class="none"', '');
            fs.writeFileSync("./result.html", output);
        }).catch((err) => {
            console.log(`Xatolik: ${err}`);
        });
}

app.get("/", (req, res) => {
    console.log(1);
    res.send(200, indexTemp);
});

app.get("/hello", (req, res) => {
    getImage(req.url.split("=")[1], answerTemp);
    setTimeout(() => {
        res.send(200, fs.readFileSync(`${__dirname}/result.html`, "utf-8"));
    }, 1000);
});

app.get("*", (req, res) => {
    console.log(req.url);
    res.send(404, "Not Found!");
});

const PORT = 5000;
app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server ${PORT} chida portda ishga tushdi...`);
})