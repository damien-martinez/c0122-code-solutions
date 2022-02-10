/* exported ransomCase */

// function that takes input string and returns
// the same string with every other letter uppercased

// assigns a new variable
// uses a for loop to iterate through the string
// checks if the index is an even number
// if it is, lowercase it and re-assign to newstring
// if it instanceof, uppercase it and reassign it to string

// returns newString

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}
