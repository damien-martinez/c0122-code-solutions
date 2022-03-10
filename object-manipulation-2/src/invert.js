/* exported invert */

// a function that takes in an object and returns a new object with the properties as keys and the keys as properties

// create a variable called newobj and assign an empty object to the variable

// run a for in loop that iterates through object.
// in the for loop code block, assign the property of the object to the new object by create a property from the value of the property of the original object

// return new object

function invert(source) {
  var newObj = {};
  for (var prop in source) {
    newObj[source[prop]] = prop;
  }
  return newObj;
}
