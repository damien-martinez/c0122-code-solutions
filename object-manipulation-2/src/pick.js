/* exported pick */

function pick(source, keys) {

  var newObj = {};

  for (var i = 0; i < keys.length; i++) {

    for (var prop in source) {
      if (prop === keys[i] && source[prop] !== undefined) {
        newObj[prop] = source[prop];
      }
    }
  }

  return newObj;

}
