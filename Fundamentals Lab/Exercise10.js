// Exercise 10.
// The following constructor function creates a new Person object with the given name and
// age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = () => {
    return this.age >= 16;
  };
  this.toString = () => {
    return `${this.name}, ${this.age}, ${this.human}`;
  };
}

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  canDrive() {
    return this.age >= 16;
  }
  toString() {
    return `${this.name}, ${this.age}`;
  }
}

const me = new Person("William", 24);
const her = new Person("Paige", 21);
const him = new PersonClass("Lando", 4);

console.log(`${me}, Can drive: ${me.canDrive()}`);
console.log(`${her}, Can drive: ${her.canDrive()}`);
console.log(`${him}, Can drive: ${him.canDrive()}`);
