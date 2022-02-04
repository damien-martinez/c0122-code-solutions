/* exported isUpperCased */

// function to check if everything in a string is uppercased
// iterates through the word
// checks if a letter's char code is inside the range of 97-122
// if inside Range, that means letter is not upper case and will end code and return false
// if everthing is  outside that Range , it will return true, meaning everything does not have a  lowercase

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
      return false;
    }
  }
  return true;
}
