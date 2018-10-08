let hamburgerButton = document.querySelector('.hamburger-menu');

hamburgerButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    let navMenu = document.querySelector('.nav-list');

    navMenu.classList.toggle('active');
    this.classList.toggle('active');
}