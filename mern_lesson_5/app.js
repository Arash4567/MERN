/* const slug = require("slugify");

console.log(slug("Assalomu aleykum"));
console.log(slug("Assalomu aleykum", "_"));
console.log(slug("Assalomu   aleykum?", {
    lower: true,
    trim: true,
    remove: /[?]/g,
    replacement: "_"
}));
 */
/* Versiyalash */

/* "nodemon": "^2.1.15" */

// 15 - bug fixed
// 1 - minor changes
// 2 - major changes

/* npm i prompt-sync - consoledan ma'lumotlarni o`qib olish*/
const prompt = require("prompt-sync")();

let arr = [];
// n x m  3 x 4
let n = 3;
let m = 4; 
for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < m; j++){
        arr[i][j] = parseInt(prompt(`arr[${i}][${j}] = `)); 
    } 
}

arr.forEach(item => {
    item.forEach(element => {
        if (element > 3) console.log(element);
    })
})

// [ 
//     [ 0, 1, 2, 3 ], 
//     [ 1, 2, 3, 4 ], 
//     [ 2, 3, 4, 5 ] 
// ]

console.log(arr);