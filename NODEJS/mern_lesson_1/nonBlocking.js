const fs = require('fs');
// Non-blocking code
fs.readFile('./REJA.html', 'utf-8', (err, data) => {
    console.log(data);
    console.log("**********************************");
});
console.log("Faylni o`qish boshlandi...");
console.log("--------------------------");

// function add(a, b) {
//     console.log(a + b);
// }
// add(2,4);

// (a, b) => a + b;