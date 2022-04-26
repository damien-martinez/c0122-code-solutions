/* exported countValues */

function countValues(stack) {
  let count = 0;
  const stackLength = stack.print().split('<-');

  for (let i = stackLength.length - 1; i >= 0; i--) {
    if (stack.pop() !== undefined) {
      count++;
    }
  }

  return count;

}
