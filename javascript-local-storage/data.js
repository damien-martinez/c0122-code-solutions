/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local-storage');

// console.log('get item', previousTodosJSON);

if (previousTodosJSON !== null) {
  var parsedData = JSON.parse(previousTodosJSON);
  // console.log(parsedData);
  todos = parsedData;
}

function beforeunloadListener(event) {
  var stringifyArray = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', stringifyArray);
  // console.log('stored items', storedItems);
  event.preventDefault();
}

window.addEventListener('beforeunload', beforeunloadListener);

// console.log(previousTodosJSON);
