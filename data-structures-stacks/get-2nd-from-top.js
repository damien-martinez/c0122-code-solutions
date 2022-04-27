/* exported get2ndFromTop */

function get2ndFromTop(stack) {

  if (stack.peek() === undefined) {
    return undefined;
  }
  let count = 0;
  let top = 0;
  let secondTop = 0;
  while (stack.peek() !== undefined) {
    count++;
    top = stack.pop();

    if (stack.peek() === undefined && count === 1) {
      stack.push(top);
      return undefined;
    }

    stack.push(top);

    if (count === 2) {
      top = stack.pop();
      secondTop = stack.pop();
      stack.push(secondTop);
      stack.push(top);
      return secondTop;
    }

  }

}
