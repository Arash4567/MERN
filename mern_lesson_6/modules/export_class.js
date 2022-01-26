// class Calculator {
//     qoshish(a, b) {
//         return a + b;
//     }

//     bolish(a, b) {
//         return a / b;
//     }

//     kopaytirish(a, b) {
//         return a * b;
//     }
// }

// module.exports = Calculator;


/* Optimallashgan versiyasi */
module.exports = class {
    qoshish(a, b) {
        return a + b;
    }

    bolish(a, b) {
        return a / b;
    }

    kopaytirish(a, b) {
        return a * b;
    }
}