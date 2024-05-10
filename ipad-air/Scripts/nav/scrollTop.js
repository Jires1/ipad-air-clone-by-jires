$(document).ready(function() {
    $(window).scroll(function() {
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() > 0) {
            $('.global-header__nav').addClass('display-none');
            $('.ipad-nav').addClass('fixed');
        }else{
            $('.global-header__nav').removeClass('display-none');
            $('.ipad-nav').removeClass('fixed');
      }
    });
  });