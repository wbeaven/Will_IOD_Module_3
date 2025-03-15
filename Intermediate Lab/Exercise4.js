// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

function camelCase(cssProp) {
  return cssProp.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function arrayCamelCase(str) {
  let newString = "";
  let array = str.split("-");
  newString += array[0].toLowerCase();
  for (let i = 1; i < array.length; i++) {
    newString +=
      array[i].slice(0, 1).toUpperCase() +
      array[i].slice(1, array[i].length).toLowerCase();
  }
  return newString;
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

console.log(arrayCamelCase("hello-world-william")); //helloWorldWilliam
console.log(arrayCamelCase("THIS-will-Be-CoRRect")); //thisWillBeCorrect
