'use strict';

function calcAge(birthYear) {
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
