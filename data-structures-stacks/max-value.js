/* exported maxValue */

function maxValue(stack) {
  let top = null;
  let maxValue = Number.NEGATIVE_INFINITY;
  while (stack.peek() !== undefined) {
    top = stack.pop();

    if (top > maxValue) {
      maxValue = top;
    }

  }

  return maxValue;
}
