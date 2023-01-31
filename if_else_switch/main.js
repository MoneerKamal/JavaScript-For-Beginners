// the idea is to perform different
// actions based on different conditions

/*

In JavaScript we have the following conditional statements:

    Use if to specify a block of code to be executed, if a specified condition is true
    Use else to specify a block of code to be executed, if the same condition is false
    Use else if to specify a new condition to test, if the first condition is false
    Use switch to specify many alternative blocks of code to be executed


*/

let score = 85;
if (score > 80) {
  console.log("Very Good");
}

if (score > 50) {
  console.log("pass");
} else {
  console.log("fail");
}
let resulte = "";
if (score > 80) {
  resulte = "Very Good";
} else if (score >= 50) {
  resulte = "Good";
} else {
  resulte = "Bad";
}

if (score > 80 || score < 90) {
  resulte = "very Good";
}

// switch
let day = "";
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);
