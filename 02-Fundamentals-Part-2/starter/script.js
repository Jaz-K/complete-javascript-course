'use strict';

// STRICT MODE
/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio"; // interface reserved word
// const private = 534; // private reserved word
// const if = 23; // token if reserved word */


//FUNCTION

/* function logger() {
    console.log('Hello my name is Jaz');
}

// calling/ running / invoking funktion
logger(); 
logger(); 
logger(); 

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2, 6);
console.log(appleOrangeJuice); */

//function decleration
/* function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age = calcAge1(1985)
console.log(age);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1985)
console.log(age2);
 */

// ARROW FUNKTION

/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1985)
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearUntilRetirement(1985, "Coco"));
console.log(yearUntilRetirement(1980, "Bob"));
 */

//FUNCTIONS CALLING FUNCTIONS

function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)
    const juice = `juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
