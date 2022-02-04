/* exported isVowel */

// creating a function that passes in a single character and checks whether it is a vowel or note

// first need to create an array that contains both lower and upper case vowels
// uses a for loop to interate through the Array
// checks if the character is a vowel using the indexing of the vowel Array
// if it a vowel, will return true and end function
// if not a vowel will have gone through the entire array / for loop without returning anything and return false

function isVowel(char) {
  var vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (var i = 0; i < vowelArray.length; i++) {
    if (vowelArray[i] === char) {
      return true;
    }
  }
  return false;
}
