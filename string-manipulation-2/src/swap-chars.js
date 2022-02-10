/* exported swapChars */

// function takes in a string with 3 parameters, firstIndex, secondIndex, string. amd returns a new string where the character indexed from the first index parameter is swapped with the character indexed at the second index parameter

// create a variable and assign it to the string at first index
// create a variable and assign it to the string at second index
// create a newstring empty variable
// run a for loop that interates through the string
// checks if the index is at the index of first index
// if it is, concatenate the new string with the character at the second index and re-assign it
// if it isnt, check if the current index is at the secondIndex.
// if it is, concatenate the second index with the new string and re-assign
// if neither condition checks, concatenate the character at the current index with new string

function swapChars(firstIndex, secondIndex, string) {
  var firstIndexChar = string[firstIndex];
  var secondIndexChar = string[secondIndex];
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += secondIndexChar;
    } else if (i === secondIndex) {
      newString += firstIndexChar;
    } else {
      newString += string[i];
    }

  }

  return newString;
}
