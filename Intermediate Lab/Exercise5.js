// 5.
// a) Explain why the below code returns the wrong answer
// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.
// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns
// the correct float result. https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

// d) (Extension) Extend the below function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.

let twentyCents = 0.2;
let tenCents = 0.1;

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?
// It's adding the values as strings

function currencyAddition(float1, float2) {
  let result = Number(float1) + Number(float2);
  return result.toFixed(2);
}

console.log(currencyAddition(0.2, 0.1));

function currencyOperation(float1, float2, operation, numDecimals) {
  let result = 0;
  switch (operation) {
    case "+":
      result = Number(float1) + Number(float2);
      break;
    case "-":
      result = Number(float1) - Number(float2);
      break;
    case "*":
      result = Number(float1) * Number(float2);
      break;
    case "/":
      result = Number(float1) / Number(float2);
      break;
    default:
      break;
  }
  return result.toFixed(numDecimals);
}

console.log(currencyOperation(7, 8, "/", 5));
