/* exported tail */

// function that will return a new array that has all elements but the first element

// create a new array

// iterate through the array but start at the index of 1

// append the array element at the index to the new array

// return the new array

function tail(array) {
  var newArray = [];

  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}
