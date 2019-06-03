// Hide navbar on scroll

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 90) {
      $(".nav-bar-two").addClass("bg-shade-dark");
      $(".scroll-down").hide();
    } else {
      $(".nav-bar-two").removeClass("bg-shade-dark");
    }
  });
});

// Smooth anchor scrolling + offset landing

$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top -60
  }, 400);
  return false;
});

// Navigation close upon clicking menu item or scrolling

window.onscroll = function() {
  var navDropButton = $('button.navbar-toggler');
  if (navDropButton.attr('aria-expanded') === 'true') {
    navDropButton.trigger('click');
  }
};