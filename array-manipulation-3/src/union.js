/* exported union */

// a function that takes in two array arguments and returns a new array of unique  Elements in the order they apprear

// create a newarray variable and assign an empty array to it
// create a counter variable and assign 0 to it

// run a for loop that iterates through the first array by initializiing a variable and assigning 0 to it, checking if variable is less than the length of the first array before running the code block of the for loop and lastly incrementing the variable after each pass of the for loop
// inside the code block, append the element at the index of the first array to  new array

// outside of the for loop iterate through the second array by initializing a variable and assigning 0 to it, checking if the variable iss less than the length of the second array before running the code block od the for loop, and lastly incrementing the variable after each pass of the for loop
// inside of for loop, run a for loop that iterates through the newarray by initializing a variable and assigning 0 to it, checking if the variable is less than the length of the newarray before running the code in the code block, and lastly, incrementing the variable by one after each pass of the loop
// if element at index of second array is equal to element at index of newarray counter is incremented by one
// outside of if and second for loop, check if counter is less than 1,
// if So, append the element at the index of second array to new array

// outside of if, assign 0 to counter

// outside of for loop, return new array

function union(first, second) {
  var newarray = [];
  var counter = 0;

  for (var i = 0; i < first.length; i++) {
    newarray.push(first[i]);
  }

  for (i = 0; i < second.length; i++) {
    for (var j = 0; j < newarray.length; j++) {
      if (second[i] === newarray[j]) {
        counter++;
      }
    }
    if (counter < 1) {
      newarray.push(second[i]);
    }
    counter = 0;
  }
  return newarray;
}
