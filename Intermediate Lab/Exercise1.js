// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello i'm the master of the universe"));
