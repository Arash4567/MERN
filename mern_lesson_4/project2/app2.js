const fs = require("fs");
const http = require("http");
const url = require("url");

const indexTemplate = fs.readFileSync(`${__dirname}/templates/index.html`, "utf-8");
const anwerTemplate = fs.readFileSync(`${__dirname}/templates/answer.html`, "utf-8");

const data = fs.readFileSync(`${__dirname}/city.json`, "utf-8");
const dataObj = JSON.parse(data);

const replaceTemplate = (stext, db) => {
    // {$COUNTRY$}ning poytaxti {$CITY$}
    let result = '';
    stext = stext.toLowerCase().replace("+", " ");
    db.forEach(element => {
        if (element["country"].toLowerCase() === stext){
            result += element["city"];
        } 
    });
    if (result){
        let output = anwerTemplate.replace("{$COUNTRY$}", stext);
        output = output.replace("{$CITY$}", result);
        return output;
    } else {
        let output = anwerTemplate.replace("{$COUNTRY$}ning poytaxti {$CITY$}", 
        "Siz qidirgan davlat poytaxti bazadan topilmadi!");
        return output;
    }
}

const server = http.createServer((req, res) => {
    const routes = req.url;
    if (routes == "/") {
        res.writeHead(200, {
            "Content-type": "text/html"
        });
        res.end(indexTemplate);
    } else {
        res.writeHead(200, {
            "Content-type": "text/html"
        });
        let text = routes.split("=")[1];
        res.end(replaceTemplate(text, dataObj));
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Loyiha 8000 chi portda ishga tushdi...");
});