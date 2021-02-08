window.onscroll = function() {scrollFunction()};
$(window).on("scroll", function() {
      if (screen.width <= 992) {
            var x = document.getElementsByClassName('nav-link-span');
            for (var i=0;i<x.length;i++) {
                  x[i].style.color = "#FFDB58";
            }
            document.getElementById('navbarDropdown').style.color = "#FFDB58";
            return;
      }
      if($(window).scrollTop() > 100) {
            var x = document.getElementsByClassName('nav-link-span');
            for (var i=0;i<x.length;i++) {
                  x[i].style.color = "#FFDB58";
            }
            document.getElementById('navbarDropdown').style.color = "#FFDB58";
            $('nav').addClass('black');
      }
      else {
            var x = document.getElementsByClassName('nav-link-span');
            for (var i=0;i<x.length;i++) {
                  x[i].style.color = "#125487";
            }
            document.getElementById('navbarDropdown').style.color = "#125487";
            $('nav').removeClass('black');
      }
});
// function load() {
//       alert("Hello");
// }

function scrollFunction() {
      var mybutton = document.getElementById('scroll-up-btn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function todayDate(){
      var d = new Date();
      var n = d.getFullYear() + "  ";
      return document.getElementById("date").innerHTML = n;
}