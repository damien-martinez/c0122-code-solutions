/* exported reverse */

// create a function that takes in an array and return the reversal of that array

// will create a new array variable

/* will create a for loop that initializes a vraible to make sure that the
 for loop iterates starting at the encodeURI, makes sure that it stops once
 the initialized variable hits zero, and decrements the variable to ensure that
 the iteration is decrementing */

//  pushes the element at the current index into the newarray variable

// returns the newarray

function reverse(array) {
  var newArray = [];

  for (var i = (array.length - 1); i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
