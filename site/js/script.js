window.onscroll = function() {scrollFunction()};
$(window).on("scroll", function() {
      if (screen.width <= 992) {
            var x = document.getElementsByClassName('nav-link-span');
            for (var i=0;i<x.length;i++) {
                  x[i].style.color = "#FFDB58";
            }
            document.getElementById('navbarDropdown').style.color = "#FFDB58";
            document.getElementById('nav-active-span').style.color = "black";
            return;
      }
      if($(window).scrollTop() > 100) {
            var x = document.getElementsByClassName('nav-link-span');
            for (var i=0;i<x.length;i++) {
                  x[i].style.color = "#FFDB58";
            }
            document.getElementById('navbarDropdown').style.color = "#FFDB58";
            document.getElementById('nav-active-span').style.color = "white";
            $('nav').addClass('black');
      }
      else {
            var x = document.getElementsByClassName('nav-link-span');
            for (var i=0;i<x.length;i++) {
                  x[i].style.color = "#125487";
            }
            document.getElementById('navbarDropdown').style.color = "#125487";
            document.getElementById('nav-active-span').style.color = "black";
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

function validate() {
  var email = document.getElementById('email');
  var flag = false;
  var i = 0;
  for (i = 0; i < email.length; i++) {
    if (email[i] == '@') {
      flag = true;
      break;
    }
  }
  if (flag) {
    if (i >= email.length-1) {
      document.getElementById('email-prompt').innerHTML = "Email must something after @";
      return false;
    }
    else {
      document.getElementById('email-prompt').innerHTML = "";
      return true;
    }
  }
  else {
    document.getElementById('email-prompt').innerHTML = "Email must include @";
    return false;
  }
  return true;
}