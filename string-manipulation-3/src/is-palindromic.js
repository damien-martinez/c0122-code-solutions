/* exported isPalindromic */

// a function that takes in a string and returns a boolean as to whether or not it is a palindrome or not

// create a variable to store the string with no spaces. asign an empty string to that variable
// create another variable to store the string but backwards and assign an empty string to that variable.

// run a for loop that iterates through the string
// checks is the character at the index od string is not a space
// if it is not a space, append the nospacestring to string at index and re-assign to nospacestring

// run a for loop that decrements through the string
// if string at index is not equal to space
// append the newstring to the string at index and reassign to newstring

// have a if conditional to check if the newstring is equal to nospace string
// if true, return true
// if not true, return false

function isPalindromic(string) {
  var noSpaceString = '';
  var newString = '';

  for (var j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      noSpaceString += string[j];
    }
  }

  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      newString += string[i];
    }

  }
  if (newString === noSpaceString) {
    return true;
  }
  return false;
}
