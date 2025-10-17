'use strict';

// SCOPE AND SCOPECHAIN
/* function calcAge(birthYear) {
  const age = 2034 - birthYear;

  function printAge() {
    let output = `${firstName} are the ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 <= 1996) {
      var millienial = true;
      // creating NEW variable with same name as outer scopes's variable
      const firstName = 'Coco';
      // Reassingning outer scopes's variable
      output = 'New OUTPUT';

      const str = `Oh, and you are and millienial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millienial);
    // console.log(add(2, 5));
    console.log(output);
  }
  //   console.log(add(2, 5));
  printAge();
  return age;
}

const firstName = 'Jaz';
calcAge(1985);
// console.log(age);
// printAge();
 */

// HOISTING
/* //Variables
console.log('me', me);
// console.log('job', job);
// console.log('year', year);

var me = 'Jaz';
let job = 'Programmer';
const year = 1985;

//functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//EXAMPLE
console.log(numProducts); //numProducts is undefined so its falsy
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('all products deleted');
}

var x = 1; // var creates property in the global window object
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z); */

// THIS

// console.log(this); // refers to window object

/* const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  // console.log(this); // undefined
};

calcAge(1985);

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  // console.log(this); // window arrow point to parent/global scope
};

calcAgeArrow(1985);

const jaz = {
  year: 1985,
  calcAge: function () {
    console.log(this); //  refers to jaz object
    console.log(2025 - this.year);
  },
};

jaz.calcAge();

const coco = {
  year: 2017,
};

coco.calcAge = jaz.calcAge; // method borrowing
coco.calcAge();

const f = jaz.calcAge; // stored the function to variable f
f(); // this is undefined, just a regular function without owner */

// THIS REGULAR AND ARROW FUNCTIONS

// var firstName = 'Rocky'; // sets a global variable
// '
// const jaz = {
//   firstName: 'Jaz',
//   year: 1985,
//   calcAge: function () {
//     console.log(this); //  refers to jaz object
//     // console.log(2025 - this);
//     // console.log(2025 - this.year);

//     // NOT WORKING because of regular function
//     /* const isMillenial = function () {
//       console.log(this); //undefined because regular function
//       console.log(this.year >= 1981 && this.year <= 1996);
//       // regular function call so this is undefined */

//     // SOLUTION 1
//     /*  const self = this; // self or that
//     const isMillenial = function () {
//       console.log(self);
//       console.log(self.year >= 1981 && self.year <= 1996);
//      */
//     // SOLUTION 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//       // works because arrow function refers to parent scope
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`), // undefined refers to window
//   // arrow functions does not get their own this keyword, they get it from the parent scope
// };
// jaz.greet(); // 'Hey undefined'
// jaz.calcAge();

// //ARGUMENTS KEYWORD
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 7, 12);

// var adArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// adArrow(2, 5, 8); // error arguments is not defined'

// OBJECT REFERENCE IN PRACTICE

const coco1 = {
  firstname: 'Coco',
  lastName: 'Catty',
  age: 10,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedCoco = marryPerson(coco1, 'Doggo');

// const marriedCoco = coco;
// marriedCoco.lastName = 'Doggo';

console.log('Before:', coco1);
console.log('After:', marriedCoco);
// Both show {firstname: 'Cococ', lastName: 'Doggo', age: 10}
// it changes the reference both point to the same object in the heap

// COPY OBJECT

const coco = {
  firstname: 'Coco',
  lastName: 'Catty',
  age: 10,
  family: ['Alice', 'Bob'],
};

// SHALLOW COPY (FIRST LEVEL)
const cocoCopy = { ...coco };
cocoCopy.lastName = 'Dogo';
// created a real copy of the object and mutated the lastName

// cocoCopy.family.push('mary');
// cocoCopy.family.push('john');
// both show ["Alice","Bob","mary", "john"]
// the array is not a new object in the heap both reference to the same array
// console.log('coco', coco);
// console.log('cocoCopy', cocoCopy);

// DEEP CLONE INCL ALL LEVEL OF OBJECTS
const cocoClone = structuredClone(coco);
cocoClone.family.push('mary');
cocoClone.family.push('john');

console.log('Original', coco);
console.log('Clone', cocoClone);
