// DOM document objuect model

// javaScript can manipulate the DOM

/*
The DOM is a W3C 
(World Wide Web Consortium) 
standard.

The DOM defines 
a standard for accessing 
documents:

"The W3C Document Object Model (DOM)
 is a platform and language-neutral
interface that allows 
programs and scripts 
to dynamically access 
and update the content, 
structure, and style of a document."

The W3C DOM standard is 
separated into 3 different parts:

Core DOM - standard model for all document types
XML DOM - standard model for XML documents
HTML DOM - standard model for HTML documents
*/

/*
What is the HTML DOM?

The HTML DOM is a standard object model and programming 
interface for HTML. It defines:

    The HTML elements as objects     // <div> </div>
    The properties of all HTML elements // innerHtml
    The methods to access all HTML elements getElementById()
    The events for all HTML elements  onClick

In other words: The HTML DOM is a standard for how to get, 
change, add, or delete HTML elements.
*/

// The HTML DOM Document Object
const section1 = document.getElementById("section1");
console.log(section1);

const section2 = document.querySelector("#section2");
console.log(section2);

section2.style.display = "block";
section2.style.color = "red";

const sections = document.getElementsByClassName("section");
console.log(sections);

const sqs = section1.querySelectorAll(".sq");
console.log(sqs);
const sqs1 = section1.getElementsByTagName("div");
console.log(sqs1);

const sqs_even = section1.querySelectorAll(".sq:nth-of-type(even)");
console.log(sqs_even);

/* for (let i = 0; i < sqs_even.length; i++) {
  sqs_even[i].style.backgroundColor = "blue";
  //sqs_even[i].textContent = "blue";
  sqs_even[i].innerHTML = "<h2>blue</h2>";
} */

sqs_even.forEach((ele) => {
  ele.style.backgroundColor = "red";
  ele.setAttribute("data-at", "2");
});
console.log("********************");
console.log(sqs_even[0]);
console.log(sqs_even[0].parentElement);
console.log(sqs_even[0].parentNode);
console.log("********************");
console.log(sqs_even[0].childNodes);
console.log("********************");
console.log(sqs_even[0].parentElement.children);
console.log(sqs_even[0].parentElement.lastElementChild);
console.log(sqs_even[0].parentElement.firstElementChild);
console.log("********************");
console.log(sqs_even[0].nextElementSibling.nextElementSibling);
console.log(sqs_even[0].previousElementSibling);
console.log(sqs_even[0].closest("div"));
console.log(sqs_even[0].hasChildNodes());

/* const new_div = document.createElement("div");
section1.append(new_div); */

const createDiv = (parent) => {
  const new_div = document.createElement("div");
  new_div.textContent = parent.children.length + 1;
  new_div.style.width = "120px";
  new_div.style.height = "120px";
  new_div.style.backgroundColor = "blue";
  new_div.style.display = "flex";
  new_div.style.justifyContent = "center";
  new_div.style.alignItems = "center";

  parent.append(new_div);
};

createDiv(section1);
createDiv(section1);

section1.lastChild.remove();
