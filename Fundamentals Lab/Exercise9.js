// Exercise 9.
// Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

let moreSports = [...teamSports];
moreSports.push("Soccer", "Baseball", "Wrestling");

let dog2 = dog1;
dog2 = "Rusty";

let cat2 = { ...cat1 };
cat2.name = "Legume";

console.log(
  `OG teamsports: ${teamSports.join(", ")}\nOG dog: ${dog1}\nOG cat: ${
    cat1.name
  }, ${cat1.breed}`
);
// The original values were altered because the second variables deep cloned the originals. Any changes to the copies alters the original

console.log(
  `More sports: ${moreSports.join(", ")}\nNew dog: ${dog2}\nNew cat: ${
    cat2.name
  }, ${cat2.breed}`
);
