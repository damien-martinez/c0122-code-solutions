function callbackFunction(event) {
  console.log('target:', event.target);
  console.log('tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $liParent = event.target.closest('.task-list-item');
    console.log('parent list item:', $liParent);
    console.log('Will remove from DOM');
    $liParent.remove();

  }
}

var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', callbackFunction);
