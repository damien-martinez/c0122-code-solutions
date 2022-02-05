/* exported toObject */

/* a function that takes an array with 2 elements and returns
a new object witht he first element of the array being a key
to the object and the second element of the array being the value
 of the object */

//  create a new object literal
//  get the first element of the array and assign to a variable
//  get the second element of the array and assign to a new variable

//  using the variables add a new property and value to the object literal

//  return the object literal

function toObject(keyValuePair) {
  var newObject = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  newObject[key] = value;
  return newObject;
}
