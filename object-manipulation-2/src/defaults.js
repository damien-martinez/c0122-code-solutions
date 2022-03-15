/* exported defaults */

// a function that takes in two arguments that are both objects and returns an object that has the properties of the first object and properties of the second object if they are not already in the first object

// create a variable and assign zero int to it

// run a for in loop that iterates through source
// within code block, check is the key is in target object
// if not within target object, increment checker by 1

// outside of the last for in loop, check if checker is equal to 0
// if so, assign the value of source at given property to target at given property

// outside of if code block, assign 0 to checker

// outside of first for loop, return target

function defaults(target, source) {
  var checker = 0;

  for (var prop in source) {
    if (target[prop] !== undefined) {
      checker++;
    }

    if (checker === 0) {
      target[prop] = source[prop];
    }
    checker = 0;
  }
  return target;
}
