/* exported chunk */

// a function that takes in two parameters, an array and a number and returns arrays that contain values from the parameter array grouped by the number value of the second parameter. If there are remaining values, those also get appended into an array

// create an empty new array
// creates an empty sub array
// create a size count to check how big the sub array is

// checks if the length of the array is less than 1
// if so , returns empty array

// else,
// runs  a for loop to iterate through the array

// checks if size count is less than size argument
// if true will append character at index in array to sub array
// will increment size count

// if not true, then checks if size count is equal to size
// if true  appends subrarray  to new array array
// assigns zero to size count
// assigns empty array to sub array
// appends character at index in array to sub array
// increments size count by 1

// once out of for loop, appends sub array to new array

// returns new array

function chunk(array, size) {
  var newArray = [];
  var subArray = [];
  var sizeCount = 0;
  if (array.length < 1) {
    return [];
  } else {
    for (var i = 0; i < array.length; i++) {
      if (sizeCount < size) {
        subArray.push(array[i]);
        sizeCount++;

      } else if (sizeCount === size) {
        newArray.push(subArray);
        sizeCount = 0;
        subArray = [];
        subArray.push(array[i]);
        sizeCount++;
      }

    }
  }
  newArray.push(subArray);
  return newArray;
}
