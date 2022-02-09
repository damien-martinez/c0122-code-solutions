/* exported initial */

// a function that returns a newarray containing all elements of OG array but the last element

// create a newarray array literal
// pushes the element at the indexed array into the newArray variable
// once the for loop is complete , return the NewArray

function initial(array) {
  var newArray = [];

  for (var i = 0; i < (array.length - 1); i++) {
    newArray.push(array[i]);
  }

  return newArray;
}
