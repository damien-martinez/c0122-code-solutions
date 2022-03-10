/* exported pick */

// a function that takes in two parameted an object and an Array. returns an array that has the keys from the object if the keys are also in the array

// create an empty array variable

// for loop that iterates through array
// for in loop that iterates  through the object
// checks if property is equal to element at index of keys and property of object is not undefined
// if so, assign a new property to the newobject variable that is property of source object

// once out of for loops, return newobj

function pick(source, keys) {

  var newObj = {};

  for (var i = 0; i < keys.length; i++) {

    for (var prop in source) {
      if (prop === keys[i] && source[prop] !== undefined) {
        newObj[prop] = source[prop];
      }
    }
  }

  return newObj;

}
