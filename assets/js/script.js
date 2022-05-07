$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header__social,.header').toggleClass('active');
        $('.body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.slider').slick({
      arrows:true,
      dots:true,
      adaptiveHeight: true,
    });
  });