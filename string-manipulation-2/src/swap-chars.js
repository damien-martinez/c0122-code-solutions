/* exported swapChars */

// function takes in a string with 3 parameters, firstIndex, secondIndex, string. amd returns a new string where the character indexed from the first index parameter is swapped with the character indexed at the second index parameter

// create a variable and assign it to the string at first index
// create a variable and assign it to the string at second index
// create a newstring empty variable

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
