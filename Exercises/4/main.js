//Print the multiplication table of 2
// of N
// 1 ---> 10

for (let i = 1; i <= 10; i++) {
  console.log("2 * " + i + " =" + 2 * i);
}

function mult_table(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n + " * " + i + " =" + n * i);
  }
}
mult_table(3);

for (let i = 1; i <= 10; i++) {
  mult_table(i);
}
