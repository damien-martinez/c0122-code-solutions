/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }

  const secondNode = list.next;

  const firstNode = list;

  const restOfNode = list.next.next;

  firstNode.next = restOfNode;

  secondNode.next = firstNode;

  return secondNode;

}
