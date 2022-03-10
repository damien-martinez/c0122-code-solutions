/* exported defaults */

// a function that takes in two arguments that are both objects and returns an object that has the properties of the first object and properties of the second object if they are not already in the first object

// create a variable and assign zero int to it
// check if first argument is an empty object
// if so, iterate through second object using for in  loop
// in for loop, assign the value of source object at given property  to target at property

// if target not equal to empty object , check if source is an empty object
// if so, return target

// else,
// run a for in loop that iterates through source
// within code block, run a for in loop that iterates through target
// within code block, check if property of source is equal to property of target
// if so, increment checker by 1

// outside of the last for in loop, check if checker is equal to 0
// if so, assign the value of source at given property to target at given property

// outside of if code block, assign 0 to checker

// outside of first for loop, return target

function defaults(target, source) {
  var checker = 0;
  if (target === {}) {
    for (var prop in source) {
      target[prop] = source[prop];
    }
  } else if (source === {}) {
    return target;
  } else {
    for (prop in source) {
      for (var targProp in target) {
        if (prop === targProp) {
          checker++;

        }
      }

      if (checker === 0) {
        target[prop] = source[prop];
      }
      checker = 0;
    }

  }
  return target;
}
