function convertMinutesIntoSeconds(minutes) {
  return 60 * minutes;
}

var convertedMinutes = convertMinutesIntoSeconds(5);

console.log('The converted minutes is: ', convertedMinutes);

function greet(name) {
  return 'Hey, ' + name;
}

var greeting = greet('Beavis');

console.log('The greeting is: ', greeting);

function getArea(width, height) {
  return width * height;
}

var area = getArea(17, 42);

console.log('Area is: ', area);

function getFirstName(person) {
  return person.firstName;
}

var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('First name is: ', firstName);

function getLastElement(array) {
  return array[array.length - 1];
}

var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('The last element is: ', lastElement);
