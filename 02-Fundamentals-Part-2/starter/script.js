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

function logger() {
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
console.log(appleOrangeJuice);
