const fs = require('fs');
// Non-blocking code
fs.readFile('./index.html', 'utf-8', (err, data) => {
    console.log(data);
    console.log("**********************************");
});
console.log("Faylni o`qish boshlandi...");
console.log("--------------------------");