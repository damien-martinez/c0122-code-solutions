/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return;

  }
  let first = null;
  let count = 0;
  while (queue.peek() !== undefined) {
    count++;
    first = queue.dequeue();
    if (queue.peek() === undefined && count === 1) {
      return first;
    }

    if (first <= queue.peek()) {
      return first;

    }

    queue.enqueue(first);

  }

}
