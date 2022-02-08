function handleFocus(event) {
  console.log('focus event was fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log('value of input', event.target.value);
}

var userNameSelector = document.querySelector('#user-name');
var userEmailSelector = document.querySelector('#user-email');
var userMessageSelector = document.querySelector('#user-message');

userNameSelector.addEventListener('focus', handleFocus);
userNameSelector.addEventListener('blur', handleBlur);
userNameSelector.addEventListener('input', handleInput);

userEmailSelector.addEventListener('focus', handleFocus);
userEmailSelector.addEventListener('blur', handleBlur);
userEmailSelector.addEventListener('input', handleInput);

userMessageSelector.addEventListener('focus', handleFocus);
userMessageSelector.addEventListener('blur', handleBlur);
userMessageSelector.addEventListener('input', handleInput);

function submitEvent(event) {
  var formInfo = {};
  console.log('Submitted!');
  event.preventDefault();
  for (var i = 0; i < form.elements.length - 1; i++) {
    formInfo[form.elements[i].name] = form.elements[i].value;
  }
  console.log(formInfo);
  form.reset();
}

var form = document.querySelector('#contact-form');

form.addEventListener('submit', submitEvent);
