/* exported numVowels */

// a function that takes in a string and returns how many vowels in the string

// first creates an array with both upper case and lower case vowels
// creates a variable and assigns a 0 to it
// runs a for loop to iterate through the string
// checks if the character at a certain index is included in the array created
// if it is, increments the count
// returns count

function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count += 1;
    }
  }
  return count;
}
