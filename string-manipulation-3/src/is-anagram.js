/* exported isAnagram */
function isAnagram(firstString, secondString) {

  var testString = '';
  for (var i = 0; i < firstString.length; i++) {
    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i] === secondString[j]) {
        testString += firstString[i];
        if (secondString.length >= 2) {

          secondString = secondString.slice(0, j) + secondString.slice(j + 1);
          break;
        } else if (secondString.length === 1) {

          secondString = secondString.slice(j);
          break;

        }
      }
    }
  }

  if (testString === firstString) {
    if (secondString[0] === ' ') {
      return true;
    } else if (firstString[firstString.length - 1] === secondString[0]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }

}
