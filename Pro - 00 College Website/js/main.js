const hamburger = document.querySelector(".hamburger");
const main_navbar = document.querySelector(".main_navbar");

hamburger.addEventListener('click', () => {
    main_navbar.classList.toggle("active");
})