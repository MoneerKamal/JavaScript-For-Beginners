// Calculate 6! (The factorial of 6)
//  N!

// The factorial of a number
// is the product of all the integers
// from 1 to that number.
// For example, the factorial of 6 is 1*2*3*4*5*6 = 720
// 3!  1 * 2 * 3
// 1! = 1

let res = 1;

for (let i = 1; i <= 6; i++) {
  res = res * i;
  // res *=i;
}
console.log(res);

function factorialofN(n) {
  let res = 1;

  for (let i = 2; i <= n; i++) {
    res = res * i;
    // res *=i;
  }
  console.log(res);
}
factorialofN(3);
