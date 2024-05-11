/* show menu */

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//  menu hidden

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// enlever le menu mobile
const navLink = document.querySelectorAll('nav-menu');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// changement d'arriere plan du header
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

// temoignage
let testimonialswiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// new swiper
let newswiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        576: {
            slidesPerview: 2,
        },
        768: {
            slidesPerview: 3,
        },
        1024: {
            slidesPerview: 4,
        },
    },
});


// scroll section active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.ofssetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('#nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('#nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
    window.addEventListener('scroll', scrollActive)
}
// scroll up

function scrollup() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 400) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollUp)
}

// cart show
const cart = document.getElementById('cart'),
    cartshop = document.getElementById('cart-shop'),
    cartclose = document.getElementById('cart-close');

if (cartshop) {
    cartshop.addEventListener('click', () => {
        cart.classList.add('show-cart')
    })
}


if (cart__close) {
    cart__close.addEventListener('click', () => {
        cart.classList.remove('show-cart')
    })
}

// dark light theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(icon) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})