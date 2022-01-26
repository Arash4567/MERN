// Export Class
// Export Function
// Caching

/* Class Exports */
const CalculatorClass = require("./modules/export_class");
const calc = new CalculatorClass()

console.log(calc.bolish(4, 2));

/* Function Exports */
const calcFunction = require("./modules/export_function");

console.log(calcFunction.kopaytirish(2, 5));

/* Optimallashgan versiyasi */
// const {qoshish, kopaytirish, bolish} = require("./modules/export_function");
const {kopaytirish} = require("./modules/export_function");

console.log(kopaytirish(2, 5));

/* Caching */
require("./modules/module_caching")();
require("./modules/module_caching")();
require("./modules/module_caching")();
