// components/header/header.js
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMobileMenu() {
    burgerMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    burgerMenu.classList.remove('active');
    mobileMenu.classList.remove('active');
}

burgerMenu.addEventListener('click', toggleMobileMenu);

mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        closeMobileMenu();
    }
});