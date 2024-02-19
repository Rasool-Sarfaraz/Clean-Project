// header nav menu ----------------------------------------------
const menuToggeler = document.querySelector(".menu__toggeler");
const headerNav = document.querySelector(".header__nav");
const menuLink = document.querySelector(".menu__link");

menuToggeler.addEventListener("click", (e) => {
	menuLink.classList.toggle("menu__link-active");
	headerNav.classList.toggle("header__nav-active");
});
// header nav menu ----------------------------------------------

