/* exported flatten */

// a function that takes in an array and returns an array with only the data type in the array and no array

// create a variable and assign an array to it

// use a for loop to  iterate through the array. initialize a variable and assign 0 to the variable, check if the variable is less than the length of the array before running the loop, and increment the variable after running throught he loop but before running through the next loop
// check if the data type at the index of array is not an array
// if so append that element of the array at index to the new array
// if not, use a for loop to  iterate through the array.initialize a variable and assign 0 to the variable, check if the variable is less than the length of the array at the array index before running the loop, and increment the variable after running throught he loop but before running through the next loop
// within the for loop code block append the element at the array at the index to new array
// once out of both for loops, return new array

function flatten(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      newArray.push(array[i]);
    } else {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    }
  }
  return newArray;
}
