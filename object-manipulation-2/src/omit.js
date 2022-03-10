/* exported omit */

// a function that takes in two arguments, an object and an Array. returns a new object where the property of the onject arent in the property of array

// create a variable with an empty object
// create a variable assign 0 int to the variable

// run a for in loop that iterates through object
// run a for loop that iterates through  keys array
// inside for loop, if prop is equal to character of keys at index
// inside if conditional, increment zero int variable by 1

// outside of if conditional, check if int variable is equal to zero
// if so, inside conditional, assign the value at the  property of object to a new property in new object
// outside of conditional assign 0 to int variable

// outside of for loops, return newobject

function omit(source, keys) {

  var newObj = {};
  var checker = 0;

  for (var prop in source) {

    for (var i = 0; i < keys.length; i++) {

      if (prop === keys[i]) {
        checker++;
      }
    }
    if (checker === 0) {
      newObj[prop] = source[prop];
    } checker = 0;

  }
  return newObj;
}
