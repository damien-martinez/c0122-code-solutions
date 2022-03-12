var $imgNodes = document.querySelectorAll('img');
var $circleNodes = document.querySelectorAll('.circle');

var counter = 0;
var intervalID;

intervalID = setInterval(changeCarousel, 3000);

$circleNodes[counter].setAttribute('class', 'circle fas fa-circle');
$imgNodes[counter].setAttribute('class', '');

function changeCarousel() {
  counter++;

  if (counter > 4) {
    counter = 0;
  }
  for (var i = 0; i < $imgNodes.length; i++) {
    $imgNodes[i].setAttribute('class', 'hidden');
    $circleNodes[i].setAttribute('class', 'circle far fa-circle');
  }

  $circleNodes[counter].setAttribute('class', 'circle fas fa-circle');
  $imgNodes[counter].setAttribute('class', '');
}

function clickLeft(event) {
  clearInterval(intervalID);
  for (var i = 0; i < $imgNodes.length; i++) {
    $imgNodes[i].setAttribute('class', 'hidden');
    $circleNodes[i].setAttribute('class', 'circle far fa-circle');
  }
  counter--;

  if (counter < 0) {
    counter = 4;
  }

  $circleNodes[counter].setAttribute('class', 'circle fas fa-circle');
  $imgNodes[counter].setAttribute('class', '');
  intervalID = setInterval(changeCarousel, 3000);

}

var $leftChev = document.querySelector('.chev-left-div');

$leftChev.addEventListener('click', clickLeft);

function clickRight(event) {
  clearInterval(intervalID);
  for (var i = 0; i < $imgNodes.length; i++) {
    $imgNodes[i].setAttribute('class', 'hidden');
    $circleNodes[i].setAttribute('class', 'circle far fa-circle');
  }
  counter++;

  if (counter > 4) {
    counter = 0;
  }

  $circleNodes[counter].setAttribute('class', 'circle fas fa-circle');
  $imgNodes[counter].setAttribute('class', '');
  intervalID = setInterval(changeCarousel, 3000);

}

var $rightChev = document.querySelector('.chev-right-div');

$rightChev.addEventListener('click', clickRight);

var $circleDiv = document.querySelector('.circle-div');

function clickCircle(event) {
  clearInterval(intervalID);

  for (var j = 0; j < $circleNodes.length; j++) {
    if (event.target === $circleNodes[j]) {
      for (var i = 0; i < $imgNodes.length; i++) {
        $imgNodes[i].setAttribute('class', 'hidden');
        $circleNodes[i].setAttribute('class', 'circle far fa-circle');

      }

      counter = j;
      $circleNodes[counter].setAttribute('class', 'circle fas fa-circle');
      $imgNodes[counter].setAttribute('class', '');
      intervalID = setInterval(changeCarousel, 3000);

    }
  }

}

$circleDiv.addEventListener('click', clickCircle);
