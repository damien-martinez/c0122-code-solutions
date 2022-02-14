var $openButton = document.querySelector('.open-button');
var $modal = document.querySelector('.modal');
var $overlay = document.querySelector('.overlay');
var $noButton = document.querySelector('.no-button');
var modalOpen = false;

function openModal(event) {
  if (!modalOpen) {
    $modal.className = 'row wrap position modal';
    $overlay.className = 'overlay';
    modalOpen = true;
  }

}

function closeModal(event) {
  if (modalOpen) {
    $modal.className = 'row wrap position modal display-none';
    $overlay.className = 'overlay display-none';
    modalOpen = false;
  }

}

$openButton.addEventListener('click', openModal);
$noButton.addEventListener('click', closeModal);
