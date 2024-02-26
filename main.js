const burgerButton = document.querySelector('.burger-button input');
const nav = document.querySelector('nav ul');

burgerButton.addEventListener('click', function () {
    nav.classList.toggle('slide');
});