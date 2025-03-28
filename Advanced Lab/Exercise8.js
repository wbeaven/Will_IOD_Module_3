// 8. Using the following starter code, create a decorator function to validate function arguments
// as strings. Test it by decorating the given orderItems function below.

// a) Create a decorator function validateStringArg(fn) which will validate an argument passed to fn to ensure that it is a string, throwing an error if not
// b) Extend orderItems to use the ... rest operator, allowing multiple item name arguments, and include them all in the returned string
// c) Extend the decorator function to validate as strings all arguments passed to fn
// d) When testing the decorated function, use try-catch blocks to handle errors thrown for non-string arguments

function orderItems(...itemName) {
  return `Order placed for: ${itemName}`;
}

function validateStringArg(fn) {
  return function (...args) {
    if (!args.every((arg) => typeof arg === "string")) {
      throw console.error();
    }
    return fn(...args);
  };
}

const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch")); // should run the function
// console.log(validatedOrderItem(123)); // should throw an error

try {
  console.log(validatedOrderItem("Macbook", "Apple Vision Pro"));
} catch (error) {
  console.log("Error: One or more of the items was not a string!");
}
try {
  console.log(validatedOrderItem("Macbook", 10354, "Apple Vision Pro"));
} catch (error) {
  console.log("Error: One or more of the items was not a string!");
}
