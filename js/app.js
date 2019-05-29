// Hide navbar on scroll

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 90) {
      $(".nav-bar-two").addClass("bg-shade-dark");
    } else {
      $(".nav-bar-two").removeClass("bg-shade-dark");  	
    }
  })
});

// Smooth anchor scrolling


// Offset anchor landing

function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 90);
  }
}
$(document).on('click', 'a[href^="#"]', function(event) {
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

window.setTimeout(offsetAnchor, 0);

// Navigation close upon clicking menu item or scrolling

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    $("#nav1").addClass('shrink-nav');
    $("#nav2").addClass('shrink-nav');
  } else {
    $("#nav1").removeClass('shrink-nav');
    $("#nav2").removeClass('shrink-nav');
  }
  prevScrollpos = currentScrollPos;
}
