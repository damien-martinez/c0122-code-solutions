/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  if (array.length < count) {
    return array;
  } else {
    for (var i = array.length - count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
