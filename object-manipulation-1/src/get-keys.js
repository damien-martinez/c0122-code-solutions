/* exported getKeys */

// function that takes the keys of an object and appends it to an array

// creates a newarray literal

// uses a for in loop to iterate through the object

// takes the key and appends to array

function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }

  return newArray;
}
