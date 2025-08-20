const country = "Germany";
const continent = "Europe";
let population = 84;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "german"
// isIsland = "true" 
// not possiple to change a const valua

console.log("population", population / 2);
population++

console.log(population > 6);
console.log(population < 33);

const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

const descriptionNew = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(descriptionNew);


