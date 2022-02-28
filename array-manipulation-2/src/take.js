/* exported take */

// a function that takes in an array and a count as parameters. it returns the a new array that has the contents of the first array right before the index of the count variable

// create a newarray array literal
// runs an if statement that checks of the array is less than one
// if less than 1, returns an empty array
// if not, runs a for loop that stops before the initialized variable  is equal to count
// push the char at the array's index into the new array.

// once for loop is complete , returns new array

function take(array, count) {
  var newArray = [];
  if (array.length < 1) {
    return newArray;
  } else {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
