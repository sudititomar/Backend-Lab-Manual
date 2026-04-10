// utility.js — exports reusable helper functions

function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}! Welcome to Node.js.`;
}

function isEven(num) {
  return num % 2 === 0;
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

module.exports = { add, greet, isEven, factorial };