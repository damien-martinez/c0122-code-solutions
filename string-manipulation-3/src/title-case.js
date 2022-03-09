/* exported titleCase */

// a function that capitalizes the first word of the title and any subitle.
//   capitalized all 'major' words including the second part of hyphenated major words
//     capitalize all words of 4 letters or more

// first lower case everything in the title string
// add a empty space tCreate an array with the minor words listed in the prompt
// Create a boolean that checks if the word is minor or not
// Create an empty string for the substring
// Create an empty string for the new title
// Create a boolean to check if that was the first word or not

// A for loop that increments and iterates through the title string
// Checks if the current character at the index of title is not a string.
// If it is not, append character to substring
// Checks if the current the current character is a ‘-’
// If it is, upper case the first word and re - assign it to the substring
// Reassign the substring to newstring
// Make substring equal an empty string
// If the character not equal to ‘-’, check it is is equal to ‘ ‘
// If it is, check if the character at the index minus the length of the substring minus the length of 2 is equal to ‘:’
// If it is, re - assign the substring to capitalize the first word of the substring and add a space to it
// Reassign substring to new title
// Assign substring to an empty string
// Make isminorword boolean  to true
// If first word is true
// First word is false
// Check is the character at the index minus 1 is equal to ‘:” and the substring minus the last character is equal to javascript
// If it is, new title is equal to newtitle appended with JavaScript appended with the character at the index of title minus 1 appended with an empty string
// Assign an empty string to substring
// Make isminorword false
// Check is the character at index is equal to an empty string and also not equal to ‘:”
// Capitalize the first word of substring and append an empty string.And re - assign to substring
// Reassign substring to newstring
// Reassign empty string to sub string
// If first word is not true,
//   Use a for loop to iterate through the array of words
// If the element at the index of minor words  is equal to substring
// Reassign newtitle appended with substring appended with an empty string to newtitle
// assign true to isminor word
// Assign an empty string to substring
// Break out of for loop

// If the character at index minus 1 is equal to ‘:’ and the substring without its last character is equal to ‘javascript’
// Reassign newtitle appended with javascript appended with the character at the index of title minus 1 appended with an empty string to newtitle
// Assign an empty string to newtitle
// Assign true to isminor word
// Else if, check if substring is either equal to api or javascript
// If substring equal to javascript
// Append javascript to newtitle and assign to newtitle
// If not,
// Append api to newtitle and assign to newtitle
// Assign true to isminor word
// Assign empty string to substring
// Else if isminorword is equal to false
// Check if character at index of title is an empty string
// If so, assign the capital of the first word of substring appended with the rest of the substring appended with an empty string.Assign to sub string
// Else check if character at index is equal to ‘-’
// If so, assign the capital of the first word of substring appended with the rest of the substring appended with an ‘-’ Assign to sub string
// Append substring to newtitle and reassign to new title
// Assign empty string to substring
// Make isminorword equal to false

// Return newtitle without its last character

function titleCase(title) {
  title = title.toLowerCase();
  title += ' ';

  var minorWords = ['and', 'or', 'nor', 'but', 'the', 'a', 'an', 'the', 'like', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var isMinorWord = false;
  var subString = '';
  var newTitle = '';
  var firstWord = true;

  for (var i = 0; i < title.length; i++) {
    if (title[i] !== ' ') {
      subString += title[i];
    }
    if (title[i] === '-') {
      subString = subString.slice(0, 1).toUpperCase() + subString.slice(1);
      newTitle += subString;
      subString = '';

    } else if (title[i] === ' ') {
      if (title[i - subString.length - 2] === ':') {
        subString = subString.slice(0, 1).toUpperCase() + subString.slice(1) + ' ';
        newTitle += subString;
        subString = '';
        isMinorWord = true;

      }
      if (firstWord === true) {
        firstWord = false;

        if (title[i - 1] === ':' && subString.slice(0, subString.length - 1) === 'javascript') {

          newTitle = newTitle + 'JavaScript' + title[i - 1] + ' ';

          subString = '';
          isMinorWord = true;
        } else {
          subString = subString.slice(0, 1).toUpperCase() + subString.slice(1) + ' ';

        }
        newTitle += subString;
        subString = '';

      } else {
        for (var j = 0; j < minorWords.length; j++) {
          if (minorWords[j] === subString) {
            newTitle = newTitle + subString + ' ';
            isMinorWord = true;
            subString = '';
            break;
          }
        }
        if (title[i - 1] === ':' && subString.slice(0, subString.length - 1) === 'javascript') {

          newTitle = newTitle + 'JavaScript' + title[i - 1] + ' ';

          subString = '';
          isMinorWord = true;
        } else if (subString === 'api' || subString === 'javascript') {

          if (subString === 'javascript') {
            newTitle += 'JavaScript ';
          } else {
            newTitle += 'API ';
          }
          isMinorWord = true;
          subString = '';
        } else if (isMinorWord === false) {

          if (title[i] === ' ') {
            subString = subString.slice(0, 1).toUpperCase() + subString.slice(1) + ' ';
          } else if (title[i] === '-') {
            subString = subString.slice(0, 1).toUpperCase() + subString.slice(1) + '-';
          }
          newTitle += subString;
          subString = '';
        }

        isMinorWord = false;

      }
    }

  }
  return newTitle.slice(0, newTitle.length - 1);
}
