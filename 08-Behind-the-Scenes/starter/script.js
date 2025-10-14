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
//Variables
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
console.log(z === window.z);
