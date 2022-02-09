/* exported filterOutStrings */
function filterOutStrings(values) {
  // debugger;
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    // console.log('type of', typeof (values[i]));
    if (typeof (values[i]) !== 'string') {
      noStrings.push(values[i]);
      // console.log('value', values[i]);
      // console.log('type', typeof (values[i]));
      // console.log('newarray', noStrings);
    }
  }
  return noStrings;
}
