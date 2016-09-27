$(document).ready(function() {
  $('.scroll').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing'
  });



  $("a[href^='#']").on("click", function(e) {
        e.preventDefault();
        var hash = this.hash;
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 900, function() {
            window.location.hash = hash;
        });
    });
});

var navWhite = document.getElementById("navbar");
window.onscroll = scroll;
function scroll() {
  if (window.pageYOffset >= 773) {
    navWhite.style.backgroundColor = "white";
  }
  else {
    navWhite.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  }
}


var bar = document.getElementById("fa-bars");
var navbars = document.getElementById("nav");
var body = document.querySelectorAll("body");
var clicked = false;

bar.addEventListener("click", function() {
  if (!clicked) {
    navbars.style.display = "block";
    clicked = true;
  } else {
      navbars.style.display = "";
      clicked = false;
  }
	// navbars.classList.toggle("hide");
});
