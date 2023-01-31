// Function or Method
// a function is a block of code designed
// to perform a particular task.

//  *** dry don't repeat yourself ***
//  *** one task only ***

// function is executed when
// "something" invokes it (calls it).

//example

let name1 = "moneer";
let name2 = "Kamal";
let name3 = "Jon";
let name4 = "Jak";

let greetings = "Hello " + name1;
console.log(greetings);
let greetings2 = "Hello " + name2;
console.log(greetings2);
let greetings3 = "Hello " + name3;
console.log(greetings3);
let greetings4 = "Hello " + name4;
console.log(greetings4);

function sayHello() {
  let greetings = "Hello " + "Moneer";
  console.log(greetings);
}

sayHello();
/**
 * 
 * function name(parameter1, parameter2, parameter3) {
  // code to be executed
}


 */

function sayHello2(name) {
  let greetings = "Hello " + name;
  console.log(greetings);
}
sayHello2(name1);
sayHello2(name2);
sayHello2(name3);
sayHello2(name4);

/**
 * 
 * Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.


The code inside the function will execute when "something" invokes (calls) the function:

    When an event occurs (when a user clicks a button)
    When it is invoked (called) from JavaScript code
    Automatically (self invoked)

You will learn a lot more about function invocation later in this tutorial.
 */

// Function Return

let x = myFunction(4, 3);
let Y = 10 + x;
function myFunction(a, b) {
  return a * b;
}
