//Loops execute a block of code a number of times.

//examp
/* console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5); */

let counter = 1;
for (let i = 0; i < 5; i++) {
  // 0  1 2  3 4 5

  if (counter == 3) {
    counter = counter + 1;
    continue;
  }
  console.log(counter);
  counter = counter + 1;
}

console.log(counter);

/**
 * 
    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true

 */

/**
    * for (expression 1; expression 2; expression 3) {
  // code block to be executed
}

var vs let
    */

const person = { fname: "Moneer", lname: "Kamal", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

const numbers = [1, 2, 3, 4, 5];

let text2 = "";
for (let x in numbers) {
  text2 += numbers[x];
}

const numbers2 = [1, 2, 3, 4, 5, 6];

let txt = 0;
numbers2.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}
console.log(txt);

const cars = ["BMW", "Volvo", "Mini"];

let text3 = "";
for (let x of cars) {
  text3 += x;
}
counter = 6;
while (counter < 5) {
  counter++;
}
do {
  counter++;
} while (counter < 5);

/*

while (condition) {
    // code block to be executed
  }
  
  

  do {
  // code block to be executed
}
while (condition);
  */

/**
 *
 * Break and Continue
 */
