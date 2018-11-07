var nav = document.querySelector(".main-nav");
nav.classList.remove("main-nav--nojs");

var btn = document.querySelector(".main-nav__toggle-btn");
btn.addEventListener("click", function(evt) {
  if(!nav.classList.contains("main-nav--opened")) {
    nav.classList.add("main-nav--opened");
  } else {
    nav.classList.remove("main-nav--opened");
  }
});
