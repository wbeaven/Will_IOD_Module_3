// 2. The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.
// a) What order will the four tests below print in? Why?
// b) Rewrite delayMsg as an arrow function
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// d) Use clearTimeout to prevent the fifth test from printing at all.

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};
setTimeout(delayMsg, 100, "#1: Delayed by 100ms"); // 4th
setTimeout(delayMsg, 20, "#2: Delayed by 20ms"); // 3rd
setTimeout(delayMsg, 0, "#3: Delayed by 0ms"); // 2nd
delayMsg("#4: Not delayed at all"); // 1st
clearTimeout(setTimeout(delayMsg, 2000, "#5: Delayed by 2000ms")); // 5th
