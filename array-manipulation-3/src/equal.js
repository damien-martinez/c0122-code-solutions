// /* exported equal */

// a function that takes in two array and checks if they are exactly the Same . if they are return true if they are not return false

// first checks if the length of both arrays are less than 1.
// if they are , return true

// if they are not ,
// check if length of first Array is equal to length of second array
//   if so , run a for loop that intialized a variable and assigns 0 to that variable , checks if variable is less than length of first string before it continue to run for loop. and increments variable after each pass of the for loop

//   in for loop, check if element at index of first array is not  equal to element at index of second array
//   if so, return false

//   outside of for loop, if length of both arrays are not equal to each other, return false
//   outside of code block of if conditional where it checked if lengths are equal to each other, return true

function equal(first, second) {

  if (first.length < 1 && second.length < 1) {
    return true;
  } else {
    if (first.length === second.length) {

      for (var i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) {

          return false;
        }

      }
    } else {
      return false;
    }
  }
  return true;
}
