var $display = document.querySelector('.countdown-display');
var intervalID;

function runFunction(number) {
  intervalID = setInterval(changeDisplay, 1000);
}

function changeDisplay(number) {
  if ($display.textContent === '4') {
    $display.textContent = '3';

  } else if ($display.textContent === '3') {
    $display.textContent = '2';

  } else if ($display.textContent === '2') {
    $display.textContent = '1';

  } else if ($display.textContent === '1') {
    $display.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }

}

runFunction($display.textContent);
