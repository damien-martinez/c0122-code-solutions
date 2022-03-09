/* exported reverseWords */

// a function that takes a string and reverses the letters in the word but in the original order

// create an empty string variable to hold the reverse string
// create an emplty string variable to hold the substring

// a for loop that iterates through the string
// check if string char at index is not equal to empty string
// if So, concatenate string at index and substring and assign to substring

// else, a for loop that decrements throught the subsstring
// the char at index of substring will be concatenated to resverseString and assigned to reversestring

// once out of for loop, concatenate empty string with reversestring and assign to reversestring
// assign empty string to sub string

// a for loop that decrements substring
// concatenate char of substring at j with reversestring and assign to reversestring

// return reversestring

function reverseWords(string) {
  var resverseString = '';
  var subString = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      subString += string[i];
    } else {
      for (var j = subString.length - 1; j >= 0; j--) {
        resverseString += subString[j];
      }
      resverseString += ' ';
      subString = '';
    }
  }
  for (j = subString.length - 1; j >= 0; j--) {
    resverseString += subString[j];
  }
  return resverseString;
}
