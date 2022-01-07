const fs = require('fs');
fs.readFile('./pupil.txt', 'utf-8', (err, peoples) => {
    peoples.split(",").forEach(
        (inson) => {
            let human = inson.split(" ")[0].replace('\r\n', '');
            let sms = fs.readFileSync('./bulkSms.txt', 'utf-8');
            fs.writeFileSync(`./SEND/${human}.txt`, sms.replace('[NAME]', human));
        }
    );
});

const arr = ['34.5', "4.2", "7.6", "5.2", "8.6", "4.7"];
console.log(arr.map((value, index) => value * index));
