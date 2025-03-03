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
let lessThan2 = thirty < four; // true because the strings are being compared instead of the numbers
// If you wrap the variables in Number() they would be correct

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);
