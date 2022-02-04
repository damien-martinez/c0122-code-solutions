/* exported capitalize */

// function to capitalize the first word of the string and make everthing else lowercase

// input to function is a String
// will have an empty string variable
// will loop through the string
// at index 0 will capitalize that string
// concatenate to empty string
// go through the rest of the loop and lower case
// concatenate to the string

// return the new string

function capitalize(word) {
  var capitalizedWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      capitalizedWord += word[i].toUpperCase();
    } else {
      capitalizedWord += word[i].toLowerCase();
    }
  }
  return capitalizedWord;
}
