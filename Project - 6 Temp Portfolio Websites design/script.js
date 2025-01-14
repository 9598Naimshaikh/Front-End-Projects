const desktop = document.querySelector(".desktop-nav");
const hamBurger = document.querySelector('.hamBurger');

hamBurger.onclick = function(){
    desktop.classList.toggle('active')
}