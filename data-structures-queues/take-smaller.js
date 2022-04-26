/* exported takeSmaller */

function takeSmaller(queue) {

  if (queue.peek() === undefined) {
    return;
  }

  const firstDequeue = queue.dequeue();
  const secondDequeue = queue.dequeue();

  if (secondDequeue === undefined) {
    return firstDequeue;
  }

  if (firstDequeue >= secondDequeue) {
    queue.enqueue(firstDequeue);
    return secondDequeue;
  } else {
    queue.enqueue(secondDequeue);
    return firstDequeue;
  }

}
