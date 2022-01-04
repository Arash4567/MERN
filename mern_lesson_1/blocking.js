const fs = require('fs');
// Blocking code
const matn = fs.readFileSync('./index.html', 'utf-8');
console.log(matn);