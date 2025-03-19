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

function calculateAge(birthDate) {
  const bday = new Date(birthDate);

  let years = today.getFullYear() - bday.getFullYear();
  let months = today.getMonth() - bday.getMonth();
  let days = today.getDate() - bday.getDate();

  if (days < 0) {
    months--;
    let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }
  return `I am ${years} years, ${months} months, and ${days} days old.`;
}
console.log(calculateAge("20 August 1967"));

function daysInBetween(date1, date2) {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  let days = 0;

  days = Math.abs((new Date(date1) - new Date(date2)) / 86400000).toFixed();
  return `There are ${days} days between ${date1} and ${date2}`;
}
console.log(daysInBetween("13 February 1969", "16 November 2000"));
