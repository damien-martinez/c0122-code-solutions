
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
