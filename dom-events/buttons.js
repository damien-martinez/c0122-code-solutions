function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var newVariable = document.querySelector('.click-button');

newVariable.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var mouseoverVar = document.querySelector('.hover-button');
mouseoverVar.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);

}

var doubleClickButton = document.querySelector('.double-click-button');

doubleClickButton.addEventListener('dblclick', handleDoubleClick);
