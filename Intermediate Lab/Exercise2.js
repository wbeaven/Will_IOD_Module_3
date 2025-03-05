// 2. Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.

function truncate(str, max) {
  return str.length >= max ? str.slice(0, max) + "..." : str;
}

console.log(truncate("This text will be truncated if it is too long", 25));
console.log(truncate("This text won't", 25));
