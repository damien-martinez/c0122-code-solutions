/* exported getWords */

// will create a function that takes in a single string and pushes each word of the string into an Array.

// will first create two variable
//   an empty string and an empty array

// will  look at the string to see if there are any charaters
// if no charaters, will return the empty string

// if there are characters, will loop throught the string / sentence
// will check if the string at the specific index has a character that isnt a space
// if there isnt s space will concatenate that character to a new string
// if the character at that strings index is a space, will push newString variable into the newArray
// will then reassign the new string to an empty string

// once the for loop has iterared through the entire string, will push the last word that is assigned to newString into the newArray array literal
// will lastly return the newArray

function getWords(string) {
  var newString = '';
  var newArray = [];

  if (string.length > 0) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] !== ' ') {
        newString += string[i];
      } else {
        newArray.push(newString);
        newString = '';
      }
    }
    newArray.push(newString);
    return newArray;
  } else {
    return newArray;
  }
}
