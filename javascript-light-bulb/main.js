var $circle = document.querySelector('.circle');
var day = true;
var $container = document.querySelector('.container');

function makeNightOrDay(event) {
  if (day === true) {
    $circle.className = 'circle dark-grey';
    $container.className = 'container black';
    day = false;
  } else {
    $circle.className = 'circle';
    $container.className = 'container';
    day = true;
  }
}

$circle.addEventListener('click', makeNightOrDay);
