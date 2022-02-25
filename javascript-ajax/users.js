var $userList = document.querySelector('#user-list');

var newRequest = new XMLHttpRequest();

newRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');

newRequest.responseType = 'json';

newRequest.addEventListener('load', function () {
  console.log('status:', newRequest.status);
  console.log('response', newRequest.response);
  for (var i = 0; i < newRequest.response.length; i++) {

    var $listItem = document.createElement('li');
    $listItem.textContent = newRequest.response[i].name;
    $userList.appendChild($listItem);
  }
});

newRequest.send();
