/* exported omit */

function omit(source, keys) {

  var newObj = {};
  var checker = 0;

  for (var prop in source) {

    for (var i = 0; i < keys.length; i++) {

      if (prop === keys[i]) {
        checker++;
      }
    }
    if (checker === 0) {
      newObj[prop] = source[prop];
    } checker = 0;

  }
  return newObj;
}

// && source[prop] !== undefined
