// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//PROBLEMSOLVING (google, mdn, stackoverflow)

// PROBLEM 1
// We work for a company building a smart home thermometer. Our most recent task
// is this: "Given an array of temperatures of one day, calculate the
// temperature amplitude. Keep in mind that sometimes there might be a sensor
// error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//Understanding problem
// - What is temperature is amplitude? Answer difference between highest and lowest temp
// - How to compute die max and min temp?
// - What's a sensore error? What to do what to do`?

//break it down in subproblems
// - How to ignore the error?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitute) and then return it

/* const calcTempAmplitude = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > maxTemp) maxTemp = curTemp;
    if (curTemp < minTemp) minTemp = curTemp;
  }
  console.log(maxTemp, minTemp);
  return maxTemp - minTemp;
};
// console.log(calcTempAmplitude([9, 0, 5, 8, -10]))
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude); */

// PROBLEM 2
// function should now receive 2 arrays of temp

// Understand the Problem
// With two arrays should we implement functionality twice? NO to merge twi arrays

//break it down in subproblems
// Merge two arrays

/* const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > maxTemp) maxTemp = curTemp;
    if (curTemp < minTemp) minTemp = curTemp;
  }
  console.log(maxTemp, minTemp);
  return maxTemp - minTemp;
};
// console.log(calcTempAmplitude([9, 0, 5, 8, -10]))
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [-6, 12, -9]);
console.log(amplitudeNew);
 */
//DEBUGGING

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // FIX THE BUG
    //   value: Number(prompt("Degrees celsius:")),
    value: 10,
  };
  // B) FIND THE BUG
  console.table(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY THE BUG
console.log(measureKelvin());

// DEBUGGER TEST

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let maxTemp = 0;
  let minTemp = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    // debugger;
    if (curTemp > maxTemp) maxTemp = curTemp;
    if (curTemp < minTemp) minTemp = curTemp;
  }
  console.log(maxTemp, minTemp);
  return maxTemp - minTemp;
};
// console.log(calcTempAmplitude([9, 0, 5, 8, -10]))
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
