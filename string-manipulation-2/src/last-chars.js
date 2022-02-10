/* exported lastChars */

// function with two parameters that returns a new string that is the length of the length parameter at the end of the string

// first creates a new string
// checks if the length of the string is less than the length of the length parameter
// if it is, it will return the inputted string
// if not , of checks if it is an empty string.
// if empty , will return an empty string .
// if neither conditionals are true will run a for loop and start at the length of the string minus the length , stop right before the index reaches the length of the string, and increment up
// newstring will concatenate and re-assign with string char at index
// once out of the loop, will return string

function lastChars(length, string) {
  var newString = '';

  if (string.length < length) {
    return string;
  } else if (string.length < 1) {
    return '';
  } else {
    for (var i = string.length - length; i < string.length; i++) {
      newString += string[i];

    }

  }
  return newString;
}
