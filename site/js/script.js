$(window).on("scroll", function() {
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

