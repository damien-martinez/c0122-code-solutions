/* exported includes */

function includes(list, value) {
  if (list.next === null) {
    if (list.data === value) {
      return true;
    } else {
      return false;
    }
  }

  while (list.next !== null) {
    if (list.data === value) {
      return true;
    }
    list = list.next;

  }
  if (list.data === value) {
    return true;
  }
  return false;

}
