// Comments 



// Statements


/*
A computer program is a list of "instructions" to be "executed" by a computer.

In a programming language, these programming instructions are called statements.

A JavaScript program is a list of programming statements.
*/

/*
Variables, Values, Operators, Expressions, Keywords, and Comments.

An expression is a combination of values, variables, and operators,
 which computes to a value.

The computation is called an evaluation.
*/

// Semicolon;

let x = 5 + 10;

if(x > 10){
    document.getElementById("view-area").innerHTML = x; 
}




// Keywords
/*
statements often start with a keyword to 
identify the action to be performed

var, let, if, for, function, return ...

complete list at: https://www.w3schools.com/js/js_reserved.asp

*/

// Syntax
//JavaScript syntax is the set of rules, 
//how JavaScript programs are constructed



//JavaScript Values
/*
The JavaScript syntax defines two types of values:

Fixed values   
Variable values 

Fixed values are called Literals.

Variable values are called Variables.
*/

console.log ('fixed value: ',5.5);

var v = 10;
console.log('Variable values: ',v);
v= v+1;
console.log('Variable values: ',v);

// var , let, const
/*
A JavaScript name must begin with:

    A letter (A-Z or a-z)
    A dollar sign ($)
    Or an underscore (_)

Subsequent characters may be letters, digits, underscores, or dollar signs.
*/

//var 6x=5; error
//var firstName="moneer"; 


// Operators

/*
 ( + - * / )
 (=)
 (== === != !=== > < >= <=)
 (&& || !)
 */

 let o= (5 + 5) * 10;
 
 console.log(o);
 console.log ('o>5  =>',o>5);

 console.log('o>5 && o<10  =>',o>5 && o<10);
