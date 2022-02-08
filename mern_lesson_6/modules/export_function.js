exports.qoshish = (a, b) => a + b;
exports.bolish = (a, b) => a / b;
exports.kopaytirish = (a, b) => a * b;

exports.misol = (a, b) => {
  if (a % 2 == 0 && b % 2 == 0) {
    return a * b;
  } else {
    return a + b;
  }
};
