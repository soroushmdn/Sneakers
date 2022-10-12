//  @@@@@@@@@@@@@@@@@@ PRELOADER @@@@@@@@@@@@@@@@@@
onload = () => {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 3000);
};

/*@@@@@@@@ show & remove menu @@@@@@@@*/

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

/*@@@@@@@@ remove menu when click on navlinks @@@@@@@@*/

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((n) => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/*@@@@@@@@ change header background @@@@@@@@*/

const header = document.getElementById('header');
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

//  @@@@@@ change home shapes when click on color buttons @@@@@@
let colorButtons = document.querySelector('.home__color-buttons');

colorButtons.addEventListener('click', (e) => {
  if (e.target.classList.contains('home__color-button')) {
    colorButtons.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    document.querySelector('.home__shape.active').classList.remove('active');
    document
      .querySelector(`.home__shape.${e.target.id}`)
      .classList.add('active');
  }
});

//  @@@@@@@@@@ change shoe sizes on home section @@@@@@@@@@
const shoeSizes = document.querySelectorAll('.home__size');

shoeSizes.forEach((e) => {
  e.addEventListener('click', function () {
    shoeSizes.forEach((e) => {
      e.classList.remove('active');
      this.classList.add('active');
    });
  });
});

//  @@@@@@@@@@ home increment & decrement button @@@@@@@@@@
const plusButton = document.querySelector('.home__amounts .bx-plus');
const minusButton = document.querySelector('.home__amounts .bx-minus');
const homeAmountNumber = document.querySelector(
  '.home__amounts .home__amount-num'
);
let a = 1;

plusButton.addEventListener('click', () => {
  a++;
  homeAmountNumber.innerText = a;
});

minusButton.addEventListener('click', () => {
  if (a > 1) {
    a--;
    homeAmountNumber.innerText = a;
  }
});

//  @@@@@@@@@@@@@@@@@@ show scrollup @@@@@@@@@@@@@@@@@@

window.addEventListener('scroll', scrollUp);

function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}

//  @@@@@@@@@@@@@@@@@@ swiperjs.com @@@@@@@@@@@@@@@@@@

const featuredSwiper = new Swiper('.featured__swiper', {
  spaceBetween: 20,
  loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    992: {
      spaceBetween: 30,
    },
  },
});

const womenSwiper = new Swiper('.women__swiper', {
  spaceBetween: 20,
  loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: true,
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//  @@@@@@@@@@@@@@@@@@ scrollrevealjs.org @@@@@@@@@@@@@@@@@@

const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2500,
  delay: 400,
});

sr.reveal(`.swiper , .home__container`);
sr.reveal(
  `.new__card ,.footer__content ,.footer__social ,.sale__card ,.pages`,
  {
    interval: 200,
  }
);
sr.reveal(`.collection__data ,.offer__data ,.newsletter__data`, {
  origin: 'left',
});
sr.reveal(`.collection__img ,.offer__img ,.newsletter__form`, {
  origin: 'right',
});
