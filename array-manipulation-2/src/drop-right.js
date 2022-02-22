
// a function that takes in two parameters, an array and a number and drops nth items of array on the right side and returns the new array

// creates a new array variable
// runs an if statement to check if length of array is less than the count argument
// if truem will return new array
// else ,
// will run a for loop to iterate through the array. within the conditional of the for loop, checks if i is less than the array lenght minus the count argument
// appends the character at index i to new array

// after for loop, runs new array

/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (array.length < count) {
    return newArray;
  } else {
    for (var i = 0; i < array.length - count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
