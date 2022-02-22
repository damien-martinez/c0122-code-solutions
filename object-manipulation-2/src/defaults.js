/* exported defaults */

function defaults(target, source) {
  var checker = 0;
  if (target === {}) {
    for (var prop in source) {
      target[prop] = source[prop];
    }
  } else if (source === {}) {
    return target;
  } else {
    for (prop in source) {
      for (var targProp in target) {
        if (prop === targProp) {
          checker++;

        }
      }

      if (checker === 0) {
        target[prop] = source[prop];
      }
      checker = 0;
    }

  }
  return target;
}
