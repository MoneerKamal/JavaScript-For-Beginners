//Variables?

// var , let, const

/*
All JavaScript variables must be identified with unique names.

    Names can contain letters, digits, underscores, and dollar signs.
    Names must begin with a letter.
    Names can also begin with $ and _ (but we will not use it in this tutorial).
    Names are case sensitive (y and Y are different variables).
    Reserved words (like JavaScript keywords) cannot be used as names.

*/

/* var x = 10;

var y;

var o , p; 

var a = null;

console.log(x);
console.log(y);
console.log(a); */



{
    var i=1;
}
//console.log(i);

/* let x=1;
let x;
console.log(x); */


/* console.log(a);

var a=1; */

/*


The let keyword was introduced in ES6 (2015).

Variables defined with let cannot be Redeclared.

Variables defined with let must be Declared before use.

Variables defined with let have Block Scope.

*/




/* var x = 10;
console.log(x);

{
var x = 2;
console.log(x);
}

console.log(x);

let x = 10;
console.log(x);

{
let x = 2;
console.log(x);
}

console.log(x); */

/* 


The const keyword was introduced in ES6 (2015).

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.

*/


// JavaScript Hoisting
//Hoisting is JavaScript's default behavior 
// of moving declarations to the top.

/* x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x  */

/*
Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.
*/

/* carName = "Volvo";
let carName; */

/* carName = "Volvo";
const carName; */