/* exported firstChars */

// function with two parameters that returns a new string that is the length of the length parameter

// first creates a new string
// checks if the length of the string is less than the length of the length parameter
// if it is, it will return the inputted string
// if not , of checks if it is an empty string.
// if empty , will return an empty string .a
// if neither condition works, it will run a for loop to interate through the string stops before it is incremented to the length parameter
// it will add each character at the index

// once broken out of for loop , will return new string

function firstChars(length, string) {
  var newString = '';
  if (string.length < length) {
    return string;
  } else if (string.length < 1) {
    return '';
  } else {
    for (var i = 0; i < length; i++) {
      newString += string[i];
    }
  }
  return newString;
}
