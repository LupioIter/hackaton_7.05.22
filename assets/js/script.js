$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu,.header__social,.header').toggleClass('active');
    $('.body').toggleClass('lock');
  });
});

$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
  });
});


//анимация для изображений в блоке "О проекте"
let images = new Array();
let i = 0;

images[0] = './assets/images/about/arborist.png';
images[1] = './assets/images/about/artist.png';
images[2] = './assets/images/about/spaceman.png';
images[3] = './assets/images/about/vrdesigner.png';
images[4] = './assets/images/about/history.png';

function viewImages() {
  document.querySelector(".about-photo").src = images[i];
  i++;
  if (i == images.length) {
    i = 0;
  }
  setTimeout("viewImages()", 5000);
}
viewImages();