// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing
// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.

let a = 1;
let b = 0;
function fibonacci() {
  c = a + b;
  a = b;
  b = c;
  return c;
}

function printFibonacci(limit) {
  let tickId = setInterval(() => console.log(fibonacci()), 1000);
  setTimeout(() => clearInterval(tickId), (limit + 1) * 1000);
}
printFibonacci(10);

const printFibonaccitTimeouts = () => {
  console.log(fibonacci());
  setTimeout(printFibonaccitTimeouts, 1000);
};
// setTimeout(printFibonaccitTimeouts, 1000);
