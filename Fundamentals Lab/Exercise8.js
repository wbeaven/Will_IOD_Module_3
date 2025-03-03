// Exercise 8.
// The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function
// again with the new object.

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
const made_up_place = {
  name: "Made Up Place",
  population: 80_396_001,
  continent: "Antarctica",
  founded: "31 February 2025",
  timezone: "Greenwich Mean Time",
};

function cityInfo(city) {
  for (const key in city) {
    if (Object.prototype.hasOwnProperty.call(city, key)) {
      const element = city[key];
      console.log(`${key}: ${element}`);
    }
  }
}

cityInfo(sydney);
cityInfo(made_up_place);
