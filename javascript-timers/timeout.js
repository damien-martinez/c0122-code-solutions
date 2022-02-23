var $message = document.querySelector('.message');

function changeMessage(event) {
  $message.textContent = 'Hello there...';
}

setTimeout(changeMessage, 2000);
