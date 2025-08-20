/* let js = "amazing";
// if (js === "amazing") alert("Javascript is fun");
console.log(40 + 8 + 23 - 10);

console.log("Jaz")
console.log(23)

// Variables and Values
let firstName = "Jaz";
console.log(firstName);

let jaz_coco = "JC";
let $function = 27;

let person = "Jaz";
let PI = 3.1415;

let myFirstJob = "Painter";
let myCurrentJob = "Programmer";

let job1 = "Painter";
let job2 = "Programmer";

console.log(myFirstJob);
*/

// Data Types

/* let javascriotIsFun = true;
console.log(javascriotIsFun);

console.log(typeof true);
console.log(typeof javascriotIsFun);
console.log(typeof 23);
console.log(typeof "this is cool");
console.log(typeof {});
console.log(typeof function(){});

javascriotIsFun = "YES!"

let year;
console.log(typeof year);

year = 2025;
console.log(typeof year);

console.log(typeof null);
*/

// Variables
/* let age = 30;
age = 31; // reassign or mutate a variable

const birthYear = 1985;
//birthYear = 1986; // not mutable throws an error: Assignment to constant variable.

const job; // can't be empty

var job = "programmer"; // legacy 
job = "content creater";

catsName = "Coco" //Don't do this always declare a variable
console.log(catsName); */

// Basic Operators
// Math Operators
/* const currentYear = 2037
const ageJaz = currentYear - 1991;
const ageRoelant = currentYear - 2018;

console.log(ageJaz, ageRoelant);
console.log(ageJaz * 2, ageJaz / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jaz"
const lastName = "K."

console.log(firstName + " " + lastName);
//Concatinating strings

//Assignment  Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

//Comparison Operators  (<,>,=>,=<)
console.log(ageJaz > ageRoelant); //greater than
console.log(ageRoelant >= 18); // greater or equal

const isFullAge = ageRoelant >= 18;

console.log(currentYear - 1991 > currentYear  - 2018); */

// Operator Precedence
/* const currentYear = 2037;
const ageJaz = currentYear - 1991;
const ageRoelant = currentYear - 2018;

console.log(currentYear - 1991 > currentYear - 2018);
// minus precedence 14 & greater than precedence 12 by mdn
// math operators executes before comparison operators

console.log(25 - 10 - 5); // = 10, left to right execution

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 
// first math operation right to left, than assignment operation right to left 

console.log(x, y);
const averageAge = (ageJaz + ageRoelant) / 2; //grouping (...) highest precedence
console.log(ageJaz, ageRoelant, averageAge); */

//  Template literals

/* const firstName = "Jaz";
const job = "programmer";
const birthYear = 1985;
const year = 2037;

const jaz  = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job +"!" 
console.log(jaz);

const jazNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jazNew);

console.log(`This is some text....`);

console.log("String with \n\
multiple\n\
lines");

console.log(`String
with multiple
lines.`); */

// if else control structure

const age = 15;

if (age >= 18) {
    console.log(`Rocky can start the driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Rocky is too you. Wait another ${yearsLeft} years 😀!`)
};

const birthYear = 1985;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
};

console.log(century);
