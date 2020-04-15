/*var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
  setTimeout(() => {
    modal.classList.remove('modal_active');
  }, 5000);
});

close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});*/

$(document).ready(function() {
  $('#button').click(function() {
    $('#modal').addClass('modal_active');
  });
  $('#close').click(function() {
    $('#modal').removeClass('modal_active')
  });
});