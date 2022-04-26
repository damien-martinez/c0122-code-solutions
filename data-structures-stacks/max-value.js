/* exported maxValue */

function maxValue(stack) {
  const newArray = [];

  const stackLength = stack.print().split('<-');

  for (let i = stackLength.length - 1; i >= 0; i--) {
    newArray.push(stack.pop());
  }

  let largestNumber = newArray[0];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > largestNumber) {
      largestNumber = newArray[i];
    }
  }

  if (newArray[0] === undefined) {
    return Number.NEGATIVE_INFINITY;
  } else {

    return largestNumber;

  }
}
