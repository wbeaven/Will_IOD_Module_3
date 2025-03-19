// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:

// a) Print the total number of minutes that have passed so far today
// b) Print the total number of seconds that have passed so far today
// c) Calculate and print your age as: 'I am x years, y months and z days old'
// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

console.log(
  `${today.getHours() * 60 + today.getMinutes()} minutes have passed today`
);
console.log(
  `${
    today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()
  } seconds have passed today`
);

// console.log(`I am ${today.getFullYear() - 2000} years, ${Math.abs((today.getMonth() + 1) - 11)} months, ${Math.abs(today.getDate() - 16)} and days old`)
const bday = new Date(2000, 10, 17);
console.log(today.getFullYear() - bday.getFullYear());

function calculateBday() {}
