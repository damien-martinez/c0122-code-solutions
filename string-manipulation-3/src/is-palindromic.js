/* exported isPalindromic */

function isPalindromic(string) {
  var noSpaceString = '';
  var newString = '';

  for (var j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      noSpaceString += string[j];
    }
  }

  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      newString += string[i];
    }

  }
  if (newString === noSpaceString) {
    return true;
  }
  return false;
}
