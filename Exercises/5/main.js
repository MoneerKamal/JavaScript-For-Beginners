// Return the number of vowels in a string
// vowels in english language are (a, e, i, o,u)

function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }

  return count;
}

let number = countVowels("Hello World!");

console.log(number);
