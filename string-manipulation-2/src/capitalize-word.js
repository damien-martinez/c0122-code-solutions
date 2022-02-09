/* exported capitalizeWord */

// a function that takes in a word as a paremeter and returns the
// word with only the first worst capitalizeWord. IF the word is
// JavaScript, it always returns it as 'JavaScript'

// first sets up a new variable assigned to an empty String
// creates a for loop that iterates throught the word.String
// checks if indexed at zero
// capitalizes the character at index zero
// any other index makes lower case.
// checks if the new string in all lower case is equal to 'javascript'
// returns 'JavaScript'
// if it isnt 'javascript' returns the NewString variable

function capitalizeWord(word) {
  var newString = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      newString += word[i].toUpperCase();
    } else {
      newString += word[i].toLowerCase();
    }
  }
  if (newString.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    return newString;
  }

}
