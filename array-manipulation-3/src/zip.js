/* exported zip */

// a function that takes in 2 arguments, both of which are arrays. And returns an array that has arrays in it that are paired from the array arguments based on index

// first create a variable and assign an empty array to it
// create a vraible and assign null to it

// take the length of the first array and check if it is less than or equal to the length of the second array,
// if this condition checks out, assign the lenghth of the first array to the variable that contains null
// if Not, assign the length of the second array to the variable that contains null

// run a for loop that initializes a variable and assigns to 0, it also checks if the variable is less than the variable that contains the length  of shortest of arrays before going through the loop , and also increments by the variable after each pass of the loop

// create an array and assign it to a new variable
// append the chracters at the index of both arrays to the array
// appen the new array to the array that was create at the beginning
// re-assign an empty array to the array that was created within the for loop

// outside of the for loop code block, return the array that was created at the beginning

function zip(first, second) {
  var newArray = [];
  var shortest = null;
  var subArray = [];

  if (first.length <= second.length) {
    shortest = first.length;
  } else {
    shortest = second.length;
  }

  for (var i = 0; i < shortest; i++) {
    subArray.push(first[i]);
    subArray.push(second[i]);
    newArray.push(subArray);
    subArray = [];
  }

  return newArray;

}
