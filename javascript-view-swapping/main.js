var $tabContainer = document.querySelector('.tab-container');

var $tabNodeList = document.querySelectorAll('.tab');

var $viewNodeList = document.querySelectorAll('.view');

// console.log('tab container:', $tabContainer);

// console.log('tab node:', $tabNodeList);

// console.log('view node: ', $viewNodeList);

function tabContainerFunc(event) {
  if (event.target.matches('.tab')) {
    // console.log('event target', event.target);
    var dataViewAttribute = event.target.getAttribute('data-view');
    // console.log('attribute', dataViewAttribute);
    for (var i = 0; i < $tabNodeList.length; i++) {
      // console.log('node list: ', $tabNodeList[i]);
      if ($tabNodeList[i] !== event.target) {
        $tabNodeList[i].className = 'tab';
      } else {
        // console.log('matches');
        $tabNodeList[i].className = 'tab active';

      }
    }
    for (var j = 0; j < $viewNodeList.length; j++) {
      if (dataViewAttribute === $viewNodeList[j].getAttribute('data-view')) {
        $viewNodeList[j].className = 'view';
      } else {
        $viewNodeList[j].className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', tabContainerFunc);
