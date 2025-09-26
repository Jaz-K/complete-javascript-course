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

/* function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)
    const juice = `juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
 */

/* const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
        // will not be executed return ends the function averthing after this is not shown
        console.log(`${firstName} retires in ${retirement} years.`);
    } else {
        console.log(`${firstName} has already retired 🎉`); 
        return -1; 
    }
    
    // return `${firstName} retires in ${retirement} years.`;
};

console.log(yearUntilRetirement(1985, "Coco"));
console.log(yearUntilRetirement(1970, "Mike")); */

// ARRAYS
/* 
const friend1 = "Coco";
const friend2 = "Rocky";
const friend3 = "Elliot";

const friends = ["Coco", "Rocky", "Elliot"];

console.log(friends);

const y = new Array(1984, 1999, 2005, 2018);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = "Jay"
console.log(friends);
// friends = ["Bob", "Jerry"]

const firstName = "Ellias";
const Ellias = [
    firstName,
    "Ainthworth",
    2037 - 1993,
    "Magican",
    ["Coco", "Rocky", "Elliot"],
];

console.log(Ellias);


// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1985, 2010, 2018, 1979, 1954];

console.log(calcAge(years)); // this does not work NaN
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2,age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages); */

// ARRAY OPERATIONS (Methods)

// add elements
/* const friends = ["Coco", "Rocky", "Elliot"];

const newLength  = friends.push("Zaya")
console.log(friends);
console.log(newLength);

friends.unshift("Marc")
console.log(friends);

//remove elements

const popped = friends.pop() // last
console.log(friends);
console.log(popped);

friends.shift() // first
console.log(friends);

console.log(friends.indexOf("Coco")); //index of element in array

console.log(friends.includes("Coco"))
console.log(friends.includes("Bob"))

if (friends.includes("Coco")) {
    console.log(`You have a friends called Coco.`)
}

const bill = 100;

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
 */
// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300){
//         const tip = bill * 0.15;
//         return tip;
//     } else {
//         const tip = bill * 0.2;
//         return tip
//     }
// } 

// OBJECTS

/* // Array example
const jazArray = [
    'Jaz',
    'K.',
    2037 - 1991,
    'programmer',
    ['Coco', 'Rocky']
]

// Object example
const jaz = {
    firstName: "Jaz",
    lastName: "K.",
    age: 2037 - 1991,
    job: "Programmer",
    friends: ["Coco", "Rocky","Michi"],
};

console.log(jaz);

//DOT NOTATION

console.log(jaz.lastName);
//Bracket Notations
console.log(jaz["job"]);

const nameKey = 'Name';

console.log(jaz['first' + nameKey]);
console.log(jaz['last' + nameKey]);

const interestedIn = prompt(`What do you want to know about Jaz? Choose between firstName, lastName, age, job and friends`)

if (jaz[interestedIn]) {
    console.log(jaz[interestedIn]);
} else {
    console.log(
        "Wrong request! Choose between firstName, lastName, age, job and friends"
    );
}

jaz.location = "Hamburg";
jaz['favDrink'] = "Coffee";
console.log(jaz); */


/* //Challange
//Jaz has 3 friends, and her beste friends is Coco

const jaz = {
    firstName: "Jaz",
    lastName: "K.",
    age: 2037 - 1991,
    job: "Programmer",
    friends: ["Coco", "Rocky", "Michi"],
};

console.log(
    `${jaz.firstName} has ${jaz.friends.length} friends, and her beste friends is ${jaz.friends[0]}`
); */

// OBJECT METHODS

/* const jaz = {
    firstName: "Jaz",
    lastName: "K.",
    birthYear: 1985,
    job: "Programmer",
    friends: ["Coco", "Rocky", "Michi"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2025 - birthYear
    // }

    // calcAge: function () {
    //     console.log(this); // contains the whole object
    //     return 2025 - this.birthYear
    // }

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    summary: function () {
            return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} Drivers License`;
        }
};
console.log(jaz.calcAge());
console.log(jaz.age)

// Challenge
//"Jaz is a 40 year old programmer, and she has a/no drivers license." 

console.log(jaz.summary());
 */

// FOR LOOP

// console.log('lifting weigts repetition 1 🏋️‍♀️');
// console.log('lifting weigts repetition 2 🏋️‍♀️');
// console.log('lifting weigts repetition 3 🏋️‍♀️');
// console.log('lifting weigts repetition 4 🏋️‍♀️');
// console.log('lifting weigts repetition 5 🏋️‍♀️'); BAD PRACTICE NOT DRY

// For loop keeps running while condition is true
/* for (let rep = 1; rep <= 10; rep++){
    console.log(`lifting weigts repetition ${rep} 🏋️‍♀️`);
}  */

// Looping Array

/* const jazArray = ["Jaz", "K.", 2037 - 1991, "programmer",["Coco", "Rocky"], true];

const types = [];

for (let i = 0; i < jazArray.length; i++){
    //reading from jazArray
    console.log(jazArray[i], typeof jazArray[i])

    //Filling types array
    // types[i] = typeof jazArray[i];

    //push to array cleaner version
    types.push(typeof jazArray[i])
}

console.log(types);

const years = [1999, 2003, 1985, 2020]

const age = [];

for (let i = 0; i < years.length; i++){
    age.push(2025 - years[i] )
}

console.log(age);

//continue and break
console.log("---ONLY STRINGS");

for (let i = 0; i < jazArray.length; i++) {
    if (typeof jazArray[i] !== 'string') continue;
    console.log(jazArray[i], typeof jazArray[i]);
}

console.log("---BREAK WITH NUMBER");

for (let i = 0; i < jazArray.length; i++) {
    if (typeof jazArray[i] === "number") break;
    console.log(jazArray[i], typeof jazArray[i]);
}
 */

// LOOP BACKWARDS

const jazArray = [
    "Jaz",
    "K.",
    2037 - 1991,
    "programmer",
    ["Coco", "Rocky"],
    true,
];

for (let i = jazArray.length -1; i >= 0; i--){
    console.log(i, jazArray[i]);
}

// LOOP inside of a LOOP

for (let exersise = 1; exersise < 4; exersise++) {
    console.log(`----SATRING EXERSISE  ${exersise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(` Exersise ${exersise}:  Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}
