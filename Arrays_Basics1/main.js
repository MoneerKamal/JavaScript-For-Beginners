

//JavaScript Arrays

// What is an Array:

// a special variable, which can hold more than one value
// data structure

//without array
let student1="moneer";
let student2="Ahmad";
let student3="Samir";

// with array
const students= ["Moneer","Ahmad","Samir"];
console.log(students);
console.log(students.length);

// alt
const students2=new Array("Moneer","Ahmad","Samir");

console.log(students2);

//It is a common practice to declare arrays with 
//the const keyword.

// array typeof
const person={firstname:"moneer"};
console.log(person);

console.log(typeof students2);

console.log(Array.isArray(students2));

console.log(person instanceof Array);


// Array Elements

console.log(students[0]);
console.log(students[1]);

students[3]=10;
students[students.length]=5;
console.log(students);

// array index starts at 0

console.log(students2.length);

//Adding Array Elements
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");// Adds a new element (Lemon) to fruits 

console.log(fruits);
/*
 const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits 
*/


/* 
Associative Arrays

Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.   

If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.
*/