let nav = document.querySelector("nav");
let hamburger = document.querySelector(".hamburger");

hamburger.onclick = function(){
    nav.classList.toggle("active");
}