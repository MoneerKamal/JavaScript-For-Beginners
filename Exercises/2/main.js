// - 1 - Print the odd numbers less than 100

// - 2 - Print the odd numbers less than N

for (let i = 1; i <= 100; i++) {
  if (i % 2 > 0) {
    console.log(i);
  }
}

function logOdd(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 > 0) {
      console.log(i);
    }
  }
}
logOdd(5);

// 1
// 3  1+2
// 5  3+2

function logOdd2(n) {
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
}
logOdd2(100);
