// the Math object

var a = 1;
var b = 2;
var c = 3;

var maximumValue = Math.max(a, b, c);

console.log('Max value: ', maximumValue);

var heroes = ['spidey', 'spider man', 'peter parker', 'man spider'];

var randomNumber = Math.random();

// console.log('Random number: ', randomNumber);

randomNumber = randomNumber * heroes.length;

// console.log('New random number: ', randomNumber);

var randomIndex = Math.floor(randomNumber);

console.log('Random index: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Random hero: ', randomHero);

// array methods

var library = [
  { title: 'the bible', author: 'prophets' },
  { title: 'Harry Potter', author: 'j.k. rowling' },
  { title: 'lord of the rings', author: 'j.r.r, tolkien' }];

var lastBook = library.pop();

console.log('Last book:', lastBook);

var firstBook = library.shift();

console.log('First book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

// console.log('spliced item: ', splicedItem);
console.log('New library: ', library);
// console.log(library.length);

// string methods
var fullName = 'Damien Martinez';

var firstAndLastName = fullName.split(' ');

console.log('first and last name: ', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('say my name: ', sayMyName);
