// 3.
// Use the following animals array for the below tasks. Test each one by printing the result to
// the console.
// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.

const animals = ["Tiger", "Giraffe"];
animals.push("Elephant", "Whale", "Pangolin");
animals.unshift("Zebra");
animals.sort();

function findMatchingAnimals(beginsWith) {
  return animals.filter(
    (word) => word.charAt(0) == String(beginsWith).toUpperCase()
  );
}

function replaceMiddleAnimal(newValue) {
    middle = Math.round(animals.length/2) -1;
    animals.splice(middle, 1, newValue);
}

console.log(animals);
console.log(findMatchingAnimals("t"));
replaceMiddleAnimal("Magical Beast");
console.log(animals);