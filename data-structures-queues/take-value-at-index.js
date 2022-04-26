/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {

  let test = null;

  for (let i = 0; i <= index; i++) {

    if (i === index) {
      return queue.dequeue();

    } else {
      test = queue.dequeue();
      queue.enqueue(test);

    }
  }

}
