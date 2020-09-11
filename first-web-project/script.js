function myFunction2() {
  var x = document.getElementById("mynavbar");
  var y =document.getElementById("icon");
  if (x.className === "class-navbar") {
    x.className += " responsive";
    y.className += " responsive";
  } else {
    x.className = "class-navbar";
    y.className = "icon";
  }
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

