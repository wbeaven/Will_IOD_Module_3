// 9. Given the below salaries object, perform the following tasks.

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
// b) Write a function topEarner(salaries) that calculates and returns the name of the person
// earning the highest salary

function sumSalaries(salaries) {
  let total = 0;
  Object.values(salaries).forEach((element) => {
    total += element;
  });
  return total;
}
console.log(sumSalaries(salaries));

function topEarner(salaries) {
  let highest = 0;
  Object.values(salaries).forEach((element) => {
    if (element > highest) {
      highest = element;
    }
  });
  return Object.keys(salaries).find((key) => salaries[key] == highest);
}
console.log(topEarner(salaries));
