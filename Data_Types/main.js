/*
JavaScript data types and data structures
Programming languages all have built-in data structures,
but these often differ from one language to another.
*/

 

// Primitive
//var x= 5;
 

//Objects
//const person = {firstName:"Moneer", lastName:"Kamal" , age:30};



/* 
JavaScript has 8 Datatypes

1. String 
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype

The object data type can contain:

1. An object
2. An array
3. A date

*/


// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Kamal";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"Moneer", lastName:"Kamal"};

// Array object:
const names = ["name1", "name2", "name3"];

// Date object:
const date = new Date("2023-01-15"); 

const v= null;
console.log(typeof v);

typeof ""             // Returns "string"
typeof "moneer"       // Returns "string"
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3 + 4)        // Returns "number" 
typeof null           // Returns "opject"

let car = undefined;    // Value is undefined, type is undefined 
//let car;    // Value is undefined, type is undefined 
//let car = "";    // The value is "", the typeof is "string" 


/*
Dynamic and weak typing

JavaScript is a dynamic language with dynamic types.
Variables in JavaScript are not directly associated with
any particular value type, 
and any variable can be assigned (and re-assigned) values of all types:

*/
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean


