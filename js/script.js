"use strict";

//get button
let myButton = document.getElementById("myBtn");

//when scroll down 20px, button appears

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// onclick, scroll to top of page

function topFunction() {
  document.body.scrollTop = 0; //for safari
  document.documentElement.scrollTop = 0; //for chrome, firefox, IE
}
