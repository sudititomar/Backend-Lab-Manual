// main.js — imports utility.js using require()

const { add, greet, isEven, factorial } = require('./utility');

console.log(greet('Arjun'));
console.log('5 + 3 =', add(5, 3));
console.log('Is 4 even?', isEven(4));
console.log('Is 7 even?', isEven(7));
console.log('Factorial of 5 =', factorial(5));