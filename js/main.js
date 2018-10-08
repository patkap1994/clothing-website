let hamburgerButton = document.querySelector('.hamburger-menu');

hamburgerButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    let navMenu = document.querySelector('.nav-list');

    navMenu.classList.toggle('active');
    this.classList.toggle('active');
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        margin: 100,
        items: 3,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 2
            },
            768 : {
                items: 3
            },
            1000 : {
                items: 4
            }
        }
    });
  });