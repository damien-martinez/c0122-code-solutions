/* exported takeRight */

// a function that takes in two parameters, an array and a number and returns the nth of the arrays to the right

// create a new array variable
// checks if arrays length is less than the numeric argument
// if it is, return the array argumnent
// else ,
// will run a for loop with an intitalized variable of the length of the array minus the second argument
// will iterate and add the character of that array to the new array

// will return new array

function takeRight(array, count) {
  var newArray = [];
  if (array.length < count) {
    return array;
  } else {
    for (var i = array.length - count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
