/* exported titleCase */

function titleCase(title) {
  title = title.toLowerCase() + ' ';
  var subString = '';
  var spaceCount = 0;
  var lastChar = '';
  var newTitle = '';

  // debugger;

  for (var i = 0; i < title.length; i++) {
    if (title[i] !== ' ') {
      subString += title[i];
    } else {
      spaceCount++;

      if (subString === 'javascript') {
        subString = 'JavaScript';
      } else if (subString === 'api') {
        subString = 'API';
      } else if (subString.length > 3 || spaceCount === 1 || lastChar === ':') {
        if (subString === 'javascript:') {
          subString = 'JavaScript:';
        }
        var upperCase = subString[0].toUpperCase();
        subString = upperCase + subString.slice(1, subString.length);
      }
      lastChar = subString[subString.length - 1];
      newTitle += subString + ' ';
      subString = '';

    }
  }
  return newTitle.slice(0, newTitle.length - 1);
}
