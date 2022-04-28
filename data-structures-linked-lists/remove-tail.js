/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return list;
  }

  let newList = list;

  while (newList.next !== null) {
    if (newList.next.next === null) {
      newList.next = null;
      return;

    }

    newList = newList.next;
    list = newList;

  }

}
