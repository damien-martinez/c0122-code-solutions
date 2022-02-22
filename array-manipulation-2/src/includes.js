/* exported includes */

// a function that takes in two parameters, an array and adata type. returns a boolean to state whether data is in array.

// runs a for loop to iterate through the array
// checks of char at that index of array is equal to the second parameter value
// if so, returns true

// if whole array is iterated through before returning true, returns false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
