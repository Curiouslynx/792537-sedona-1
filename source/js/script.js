var nav = document.querySelector(".main-nav");
var menu = document.querySelector(".menu");
var btn = document.querySelector(".main-nav__toggle-btn");

nav.classList.remove("main-nav--nojs");

btn.addEventListener("click", function(evt) {
  if(!nav.classList.contains("main-nav--opened")) {
    nav.classList.add("main-nav--opened");
  } else {
    nav.classList.remove("main-nav--opened");
  }
});
