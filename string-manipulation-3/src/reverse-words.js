/* exported reverseWords */
function reverseWords(string) {
  var resverseString = '';
  var subString = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      subString += string[i];
    } else {
      for (var j = subString.length - 1; j >= 0; j--) {
        resverseString += subString[j];
      }
      resverseString += ' ';
      subString = '';
    }
  }
  for (j = subString.length - 1; j >= 0; j--) {
    resverseString += subString[j];
  }
  return resverseString;
}
