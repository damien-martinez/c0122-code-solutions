/* exported drop */

// function  takes in two parameters, a string and a numnber. Returns the array without the first nth of the array

// creates a new array
// if the length of array is less than 1,
// will return the empty new array
// else,
// runs a for loop that iterates through the array
// appends the character at index of array to new array

// returns new array

function drop(array, count) {
  var newArray = [];
  if (array.length < 1) {
    return newArray;
  } else {
    for (var i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
