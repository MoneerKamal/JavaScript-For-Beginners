// Event listeners

/**
 * In programming and software design,
 * an event is an action or occurrence
 * recognized by software, often originating
 * asynchronously from the external environment,
 * that may be handled by the software.
 * Computer events can be generated or
 * triggered by the system,
 * by the user, or in other ways.
 *
 *
 * An event listener is a procedure or
 * function in a computer program that waits
 * for an event to occur. Examples of an event
 * are the user clicking or moving the mouse,
 * pressing a key on the keyboard, disk I/O,
 * network activity,
 * or an internal timer or interrupt
 */

/**
 * const sec = document.getElementById("section1");
   console.log(sec);
 * 
 */

// event syntax:
// addEventListner(event,function,useCapture)

/**
 * 
 const sec = document.getElementById("section1");
const view = sec.querySelector("#view1");
const h2 = view.querySelector("h2");

const handleEvent = () => {
  alert("handling event");
  h2.removeEventListener("click", handleEvent);
};
h2.addEventListener("click", handleEvent);

h2.addEventListener("click", () => {
  alert("handling event2");
});

 */

document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    console.log("ready");

    initApp();
  }
});

const initApp = () => {
  const sec = document.getElementById("section1");
  const view = sec.querySelector("#view1");
  const h2 = view.querySelector("h2");

  sec.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "yellow";
  });
  view.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "purple";
  });
  h2.addEventListener("click", (event) => {
    //event.stopPropagation();
    event.target.style.backgroundColor = "red";
    h2.textContent = "clicked";
  });

  const mf = document.getElementById("mf");
  mf.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("test");
  });
};
