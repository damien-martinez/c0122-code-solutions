/* exported reverseWord */

// will create a function that reverse the input word

// first create a new variable that is an empty string

// will need to create a for loop that decrements starting from the end of the string and stops at 0

// through each decremented iteration, will concatenate the character at that index to newWorld

// once the word had been fully decremented, will return the newWord string

function reverseWord(word) {

  var newWord = '';

  for (var i = (word.length - 1); i >= 0; i--) {
    newWord += word[i];

  }
  return newWord;
}
