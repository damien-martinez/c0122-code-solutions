/* exported unique */

// a function that takes in an array argument and returns a new array that contains only the  elements of the original array once and  in the order they appeared in the original array

// create an  array variable  and assign an array that thas the first element of the array in it
// counter = 0

// run a for loop that iterates through the array by initializing a variable and assigning 1 to it, by checking if the variable is less than the length of the array before going through the for loop. and by incrementing variable after every pass of the for loop
// in the for loop code block, run a for loop that iterates through the new array
// in that for loop code block check if the element at that index of array is equal to the element at the index of new array
// if So, increment counter by 1

// outside of second for loop  code block but inside the first for loop code block, check if counter is equal to 0
// if so, append the element at the index of array to new array
// outside of if code block set counter to 0

// outside of both for loops return new array

function unique(array) {
  if (array.length === 0) {
    return [];
  }

  var newArray = [array[0]];
  var counter = 0;

  for (var i = 1; i < array.length; i++) {
    for (var j = 0; j < newArray.length; j++) {
      if (array[i] === newArray[j]) {
        counter++;
      }
    }
    if (counter < 1) {
      newArray.push(array[i]);
    }
    counter = 0;
  }
  return newArray;
}
