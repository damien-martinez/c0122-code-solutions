/* exported get2ndFromTop */

function get2ndFromTop(stack) {

  if (stack.peek() === undefined) {
    return undefined;
  }

  const newArray = [];
  let secondToLast = null;

  for (let i = 0; i < 2; i++) {
    newArray.push(stack.pop());
  }

  secondToLast = newArray[1];

  for (let i = newArray.length - 1; i >= 0; i--) {
    if (newArray[i] !== undefined) {
      stack.push(newArray[i]);
    }
  }

  return secondToLast;

}
