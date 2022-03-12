/* exported isAnagram */

// a function that takes in two arguments and checks if the first argument is an anagram of the second argument

// create an emptry string variable to test a string

// run a for loop to increment through the firststring
// run a nested for loop that increments through the secondstring

// if the character at index of firststring is equal to the character at index of secondstring
// append teststring to firststring at index and reassign to teststring
// check if the length of secondstring is equal to or greater than 2
// concatenate secondstring from char 0 to index to secondString from index plus 1 and assign to second string
// break out of for loop

// if Notification, check is length of second string is equal to 1
// if So, assign secondstring to secondstring at slice of index of j
// break

// check if teststring is equal to first string
// if so check if secondstring char at index of 0 is equal to an empty string
// if so, return true

// if Not,  check if firststring at index of length of firststring minus 1 is equal to secondstring at index zero
// return true

// else return false

// if test string is not equal to firststring
// return false

function isAnagram(firstString, secondString) {

  var testString = '';
  for (var i = 0; i < firstString.length; i++) {
    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i] === secondString[j]) {
        testString += firstString[i];
        if (secondString.length >= 2) {

          secondString = secondString.slice(0, j) + secondString.slice(j + 1);
          break;
        } else if (secondString.length === 1) {

          secondString = secondString.slice(j);
          break;

        }
      }
    }
  }

  if (testString === firstString) {
    if (secondString[0] === ' ') {
      return true;
    } else if (firstString[firstString.length - 1] === secondString[0]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }

}
