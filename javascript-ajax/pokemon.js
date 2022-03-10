function getPokemonData(name) {
  var xhr = new XMLHttpRequest();
  console.log('new XMKHttpRequest constructor:', xhr);
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log('status:', xhr.status);
    console.log('response', xhr.response);
  });
  xhr.send();
}

getPokemonData('cubone');
