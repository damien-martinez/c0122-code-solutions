/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var subArray = [];
  var sizeCount = 1;
  for (var i = 0; i < array.length; i++) {
    if (sizeCount !== size) {
      subArray.push(array[i]);

    } else {
      newArray.push(subArray);
      sizeCount = 1;
    }
    sizeCount++;
  }

  return newArray;
}
