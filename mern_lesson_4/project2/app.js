const fs = require('fs');
const http = require('http');
const url = require('url');

const tempSearch = fs.readFileSync(
    `${__dirname}/templates/index.html`,
    'utf-8'
);
const tempResult = fs.readFileSync(
    `${__dirname}/templates/answer.html`,
    'utf-8'
);

const replaceTemplate = (searchText, db) => {
    let res = '';
    db.forEach(element => {
        if (element['country'] === searchText) {
            res += element['city'];
        };
    });
    if (res) {
        let output = tempResult.replace("{$COUNTRY$}", searchText);
        output = output.replace('{$CITY$}', res);
        return output;
    } else {
        let error = tempResult.replace("{$COUNTRY$}ning poytaxti {$CITY$}", 
        "So`rov natijasi bazadan topilmadi!");
        return error;
    }
    
}
const data = fs.readFileSync(`${__dirname}/city.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathname = req.url;

    if (pathname === '/') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.end(tempSearch);
    } else {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        let text = req.url.split("=");
        text = text[text.length - 1];
        res.end(replaceTemplate(text, dataObj));
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('8000 chi port ishga tushdi!');
});