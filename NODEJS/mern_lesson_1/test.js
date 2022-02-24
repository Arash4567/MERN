const fs = require('fs');

/* console.log("Working...");
const oqilganFile = fs.readFileSync('./index.html', 'utf-8');
console.log(oqilganFile); */
/* fs.readFile('./index.html', 'utf-8', (err, data) => {
    console.log(data);   
});
console.log("Working..."); */
let s = '';
for (i = 1; i < 11; i++){
    s += i + "!\n";
}
fs.writeFileSync('./natija.txt', s);
console.log("Fayl yaratildi!");