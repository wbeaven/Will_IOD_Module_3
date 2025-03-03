// Exercise 1. What are the results of these expressions? (answer first, then use console.log() to check)
"" + 1 + 0; // 10
"" - 1 + 0; // -1
true + false; // 1
!true; // false
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // 9px
"$" + 4 + 5; // $45
"4" - 2; // 2
"4px" - 2; // NaN
" -9 " + 5; //  -9 5
" -9 " - 5; // -14
null + 1; // 1
undefined + 1; // 1
undefined == null; // true
undefined === null; // false
" \t \n" - 2; // -2

// console.log(" \t \n" - 2)

// Exercise 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four; // 34 because they're being added as strings not numbers
let multiplication = three * four; // 12
let division = three / four; // 0.75
let subtraction = three - four; // -1
let lessThan1 = three < four; // true
let lessThan2 = thirty < four; // false because the strings are being compared instead of the numbers
// If you wrap the variables in Number() they would be correct

// Exercise 3. Which of the following console.log messages will print? Why?
// if (0) console.log("#1 zero is true"); // Won't print because 0 returns false
// if ("0") console.log("#2 zero is true"); // Will print because any string that isn't empty returns true
// if (null) console.log("null is true"); // Won't print becaues null returns false
// if (-1) console.log("negative is true"); // Will print because numbers other than 0 return true
// if (1) console.log("positive is true"); // Will print because numbers other than 0 return true

// Exercise 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
let a = 20,
  b = 3;
let result = `${a} + ${b} is `;
// if (a + b < 10) {
//   result += "less than 10";
// } else {
//   result += "greater than 10";
// }

a + b < 10 ? (result += "less than 10") : (result += "greater than 10");
// console.log(result);
// The += adds the result to the end of the string

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

// console.log(getGreeting("William 1"));
// console.log(greeting1("William 2"));
// console.log(greeting2("William 3"));

// Exercise 6.
// a) Complete the inigo object by adding a lastName
// property and including it in the greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console. HINT: see
// https://www.imdb.com/title/tt0093779/characters/nm0001597.
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    catchPhrase =
      person.numFingers > 5
        ? "You killed my father. Prepare to die."
        : "Nice to meet you.";
    return catchPhrase;
  },
};
// inigo.greeting(westley);
// inigo.greeting(rugen);

// Exercise 7.
// The following object represents a basketball game and keeps track of the score as the
// game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
  score: 0,
  fouls: 0,
  halfTimeScore: "",
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  foulCommited() {
    this.fouls ++;
    return this;
  },
  halfTime() {
    this.halfTimeScore = `The halftime score is ${this.score}, with ${this.fouls} fouls commited`;
    return this;
  },
  fullTime() {
    return console.log(`${this.half}The fulltime score is ${this.score}, with ${this.fouls} fouls commited`);
    // console.log("Fulltime score is " + this.score);
  },
};

//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .foulCommited()
  .freeThrow()
  .basket()
  .threePointer()
  .foulCommited()
  .halfTime()
  .basket()
  .freeThrow()
  .freeThrow()
  .foulCommited()
  .basket()
  .threePointer()
  .fullTime();