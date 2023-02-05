// 1-Print the sum of numbers from 1 to 5
// 2-improve the code to sum up to 100
// 3-make the code dynamic

// - 1 -
// a place to save the sum  (accumulator variable)
// perform the operation  // 1.2.3.4.5
// print or log the result

let sum = 0;
/* sum = sum + 1;
sum = sum + 2;
sum = sum + 3;
sum = sum + 4;
sum = sum + 5; */

sum = 1 + 2 + 3 + 4 + 5;

// sum = 15

console.log(sum);

// - 2 -
// use a loop !

let sum2 = 0;

for (let i = 1; i <= 100; i++) {
  sum2 = sum2 + i;
}

console.log(sum2);

// - 3 -
// create a function

function sumUptoN(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  console.log(sum);
}

sumUptoN(50);
