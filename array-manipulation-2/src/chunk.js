/* exported chunk */

function chunk(array, size) {
  var newArray = [];
  var subArray = [];
  var sizeCount = 0;
  if (array.length < 1) {
    return [];
  } else {
    for (var i = 0; i < array.length; i++) {
      if (sizeCount < size) {
        subArray.push(array[i]);
        sizeCount++;

      } else if (sizeCount === size) {
        newArray.push(subArray);
        sizeCount = 0;
        subArray = [];
        subArray.push(array[i]);
        sizeCount++;
      }

    }
  }
  newArray.push(subArray);
  return newArray;
}
