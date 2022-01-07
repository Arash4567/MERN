const fs = require('fs');
// Blocking code
const matn = fs.readFileSync('./REJA.html', 'utf-8');
console.log(matn);