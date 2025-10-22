'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered by ${time} at ${address}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your deliciouse pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/* // xxx
restaurant.orderDelivery({
  time: '20:23',
  address: 'Streetname, 123',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Streetname, 123',
  starterIndex: 1,
});
//

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// SWITCHING VARIABLES
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[secondary, main] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// NESTED DESTRUCTURING
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// DEFAULT VALUES

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//OBJECT DESTRUCTURING

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// changing variables names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let d = 111;
let e = 999;

const obj = { d: 23, e: 7, f: 14 };
//destructuring assignment needs ()
({ d, e } = obj);
console.log(d, e);

//nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); */

// SPREAD OPERATOR

/* const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// use cases
//shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: array, string, mats, sets. NOT objects

const str = 'Coco';
const letters = [...str, ' ', 'K.'];
console.log(letters);
console.log(...str); */

/* const ingredients = [
  prompt("Let's make Pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

console.log(ingredients);
restaurant.orderPasta(...ingredients); */

// Objects
/* const newRestaurant = { foundingIn: 1998, ...restaurant, founder: 'Guss' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name); */

// REST PATTERN & PARAMETERS

// Destructuring
// SPREAD because of the RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST because ob LEFT side =
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);

// Arrays
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2);
add(3, 4, 5, 6);
add(7, 8, 9, 10, 11, 12);

const x = [22, 44];
add(...x);

restaurant.orderPizza(
  'Cream Sauce',
  'Mushrooms',
  'Onions',
  'Truffles',
  'Parmigiano'
);

restaurant.orderPizza('Mushrooms');
