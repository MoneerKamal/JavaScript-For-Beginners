// Reverse Words In A Given String
/**
 *
 * Let the input string be
 * “i like this program very much”.
 * The function should change the string to
 * “much very program this like i”
 *
 */

let str = "i like this program very much";
let revstr = "";

//we can use array!
const temp = str.split(" ");
// loop throgh the array in reverse order

for (let i = temp.length - 1; i >= 0; i--) {
  revstr += temp[i] + " ";
}

// remove the last space
revstr = revstr.slice(0, revstr.length - 1);

document.write(revstr);
