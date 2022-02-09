/* exported getValues */

// function that takes the values of an object and appends it to an array

// creates a newarray literal

// uses a for in loop to iterate through the object

// takes the values from the object and appends to array

function getValues(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(object[key]);
  }

  return newArray;
}
