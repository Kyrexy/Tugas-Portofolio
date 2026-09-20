const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.textContent = navbar.classList.contains('active') ? '\u2715' : '\u2630';
};