/* exported isLowerCased */

// function will check if the word input has all lowercase letters

// will iterate through each letter of the word
// will check if a letter is within the range of 65- 90
// if a letter's char code is in the range of 65- 90, will end code and return false
// if nothing is within that range, then no letters are uppercase, will return true

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
      return false;
    }
  }
  return true;
}
