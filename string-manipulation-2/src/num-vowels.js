/* exported numVowels */
function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] in vowels) {
      count += 1;
    }
  }
  return count;
}
