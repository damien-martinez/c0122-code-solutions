/* exported capitalizeWords */

// a function that uppercases the start of every word

// create a new variable that has a string assigned to it
// run a for loop to iterate through the string passed in
// checks if it is indexed at 0,
// if it is, uppercase the character at index 0 and reassign to newstring
// if it isnt, check if the character at that index is an empty string
// if it is,  increment one more time to skip over that empty string
// upper case the character at new index and reassign to new string
// if neither conditional trigger, lowecase the character at index

// return new string

function capitalizeWords(string) {
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      newString += string[0].toUpperCase();
    } else if (string[i] === ' ') {
      i++;
      newString = newString + ' ' + string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
