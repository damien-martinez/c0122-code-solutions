/* exported intersection */

// a function that takes in two array arguments and returns a new array that has elements included in one and not the other

// create a newArray variable and assign an empty array to it
// create a counter varriable and assign 0 to it

// run a for loop that iterates through the first array bt initializing an i variable and assigning 0 to it, checking if i is less than the length of the first array before running through the for loop, and lastly incrememnting i by 1 at the end of each pass of the for loop
// in the first for loop code block run a for loop that iterates through the second array bt initializing an j variable and assigning 0 to it, checking if j is less than the length of the second array before running through the for loop, and lastly incrememnting j by 1 at the end of each pass of the for loop

// in the code block of the second for loop , check if the element at index i of the first array is equal to index j of the second array
// if So, increment counter by  1

// outside of the second for loop code block but within the first for loop code block , check if the counter is greater than 0

// if so, append element at the index of i of the first array to the new array
// outside of if statement assign 0 to counter

// outside of both loops return  newarray

function intersection(first, second) {
  var newArray = [];
  var counter = 0;

  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        counter++;
      }

    }
    if (counter > 0) {
      newArray.push(first[i]);
    }
    counter = 0;
  }

  return newArray;

}
