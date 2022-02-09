/* exported truncate */

// function that takes a length and a string and
// cuts the string at the index of the length paramters
// and then adds '...' to the part that wasnt cut out

// first creates a newstring variable
//  checks to see if there is a string with characters
//  if no characters will only return '...'
//  next checks if the length parameter is bigger than the string,
//  if the string is smaller than the length parameter, will return the whole string concatenated with '...'
// if none of the two previous conditions occurs,
// will iterate the loop and stop before it increments to the length of the variable
// within the loop, will concatenate the character to the new string
// once it breaks out of the loop, will return the newstring with the concatenation of '...'

function truncate(length, string) {
  var newString = '';
  if (string.length < 1) {
    return '...';
  } else if (string.length < length) {
    return string + '...';
  } else {
    for (var i = 0; i < length; i++) {
      newString += string[i];
    }
    return newString + '...';
  }
}
