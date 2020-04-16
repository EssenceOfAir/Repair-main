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
  $(window).scroll(function() {
    if($(this).scrollTop()>=600)
    $('#string').addClass('arrow-top');
  });
  $('#string').click(function(){
    $('html, body').animate({
      scrollTop: 0,
      scrollLeft: 300
    }, 1000)
  });
  $('.hero-block').mouseenter(function () {
    $('#string').removeClass('arrow-top')
  });
  $('#brif-form').validate({
    rules: {
      username: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: "Укажите имя",
      phone: "Укажите телефон",
      email: "Укажите email"
    }
  });
  $('.phone').mask('+7 (999) 999-99-99');
});

$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

// $('#string').removeClass('arrow-top')