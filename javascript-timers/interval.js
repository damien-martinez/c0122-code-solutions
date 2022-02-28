var $display = document.querySelector('.countdown-display');
var intervalID;

intervalID = setInterval(changeDisplay, 1000);

var counter = parseInt($display.textContent);

function changeDisplay() {
  if (counter > 1) {
    counter--;
    $display.textContent = counter;
  } else {
    $display.textContent = 'Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }

}
