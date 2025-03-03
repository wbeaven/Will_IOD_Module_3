// Exercise 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.
function getGreeting(name) {
  return "Hello " + name + "!";
}

const greeting1 = function (name) {
  return "Hello " + name + "!";
};

const greeting2 = (name) => {
  return "Hello " + name + "!";
};

console.log(getGreeting("William - function"));
console.log(greeting1("William - expression"));
console.log(greeting2("William - arrow"));
