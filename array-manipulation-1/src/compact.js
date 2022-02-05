/* exported compact */

// function that omits falsy values in a new array

// create a new array

// create a for loop that will iterate until the end of the array

// check if each element in the array is a truthy IDBCursorWithValue,

// if it is, then append to newarray variable

// once fully iterated, return newarray

function compact(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
