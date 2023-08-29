const form = document.querySelector(".form-container");
const navlink = document.querySelector(".nav-links");
const hamburger = document.querySelector(".btnhamburger");

hamburger.addEventListener("click", () => {
    navlink.classList.toggle('show');
    form.classList.toggle('hide');
});

