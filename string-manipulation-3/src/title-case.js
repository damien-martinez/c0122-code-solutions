/* exported titleCase */

function titleCase(title) {
  title = title.toLowerCase();
  title += ' ';

  var minorWords = ['and', 'or', 'nor', 'but', 'the', 'a', 'an', 'the', 'like', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var isMinorWord = false;
  var subString = '';
  var newTitle = '';
  var firstWord = true;

  for (var i = 0; i < title.length; i++) {
    if (title[i] !== ' ' && title[i] !== '-') {
      subString += title[i];
    }

    if (title[i] === ' ' || title[i] === '-') {
      if (title[i - subString.length - 2] === ':') {
        subString = subString.slice(0, 1).toUpperCase() + subString.slice(1) + ' ';
        newTitle += subString;
        subString = '';
        isMinorWord = true;

      }
      if (firstWord === true) {
        firstWord = false;

        if (title[i - 1] === ':' && subString.slice(0, subString.length - 1) === 'javascript') {

          newTitle = newTitle + 'JavaScript' + title[i - 1] + ' ';

          subString = '';
          isMinorWord = true;
        } else if (title[i] === ' ' && title[i - 1] !== ':') {
          subString = subString.slice(0, 1).toUpperCase() + subString.slice(1) + ' ';
        } else if (title[i] === '-') {
          subString = subString.slice(0, 1).toUpperCase() + subString.slice(1) + '-';
        }
        newTitle += subString;
        subString = '';

      } else {
        for (var j = 0; j < minorWords.length; j++) {
          if (minorWords[j] === subString) {
            newTitle = newTitle + subString + ' ';
            isMinorWord = true;
            subString = '';
            break;
          }
        }

        if (subString === 'api' || subString === 'javascript') {

          if (subString === 'javascript') {
            newTitle += 'JavaScript ';
          } else {
            newTitle += 'API ';
          }
          isMinorWord = true;
          subString = '';
        }

        if (isMinorWord === false) {

          if (title[i] === ' ') {
            subString = subString.slice(0, 1).toUpperCase() + subString.slice(1) + ' ';
          } else if (title[i] === '-') {
            subString = subString.slice(0, 1).toUpperCase() + subString.slice(1) + '-';
          }
          newTitle += subString;
          subString = '';
        }

        isMinorWord = false;

      }
    }

  }
  return newTitle.slice(0, newTitle.length - 1);
}
