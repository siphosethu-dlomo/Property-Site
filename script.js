const hamburger = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-list');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    body.classList.toggle('body-fixed');
});

