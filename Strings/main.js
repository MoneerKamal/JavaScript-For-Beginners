// strings are for storing and manipulating text.

let myname="Moneer Kamal";

//Escape Character
let text = "Hello \"World\" "; 

console.log(text);

//String Length

console.log(myname.length);


//JavaScript String charAt()

console.log(myname.charAt(0));

// Property Access

console.log(myname[0]);

/*
It makes strings look like arrays (but they are not)
    If no character is found, [ ] returns undefined, while charAt() returns an empty string.
    It is read only. str[0] = "A" gives no error (but does not work!)
*/ 



/* 
JavaScript String Methods

String charAt()
String toUpperCase()
String toLowerCase()

String trim()
String trimStart()
String trimEnd()

String slice()
String substring()
String substr()

String concat()

String replace()
String replaceAll()


String split()

*/
let myname2="moneer";
let updatedStr=myname2.toUpperCase();

console.log(updatedStr.toLocaleLowerCase());

let trimed_str="   Kamal   ".trim();
console.log(trimed_str);
console.log("   Kamal   ".trimStart());


// slice end position? (end not included).
let firstName=myname.slice(0,6);
console.log(firstName);
let lastName=myname.slice(7,12); // slice(7) without second param
console.log(lastName);

let lastName2=myname.substring(7,12);
console.log(lastName2);

let lastName3=myname.substr(7,4);
console.log(lastName3);

//let myname_concat=firstName.concat(" ",lastName);
let myname_concat=firstName + " " + lastName;

console.log(myname_concat);

//let alt_name=myname.replace(/a/g,"N");
//let alt_name=myname.replace(/m/i,"N");
let alt_name=myname.replace("M","N");
console.log(alt_name);
let alt_name2=myname.replaceAll("a","N");
console.log(alt_name2);

let myarr=myname.split(" ");
console.log(myarr);
