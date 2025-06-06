// src/utils/initUIEffects.ts
import ScrollReveal from 'scrollreveal';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initUIEffects() {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu?.classList.add('show-menu');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu?.classList.remove('show-menu');
    });
  }

  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('show-menu');
    });
  });

  // Initialize Swiper
  new Swiper('.projects__container', {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: -56,
      },
    },
  });

  // Cast sections NodeList to HTMLElement[]
  const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];

  const scrollUp = document.getElementById('scroll-up');
  const header = document.getElementById('header');
  const themeButton = document.getElementById('theme-button');
  const darkTheme = 'dark-theme';
  const iconTheme = 'ri-sun-line';

  // Restore previously selected theme and icon from localStorage
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';

  const getCurrentIcon = () =>
    themeButton?.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton?.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
  }

  // Scroll event handler (combined)
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // For active section link highlight
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');
      const sectionsClass = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass?.classList.add('active-link');
      } else {
        sectionsClass?.classList.remove('active-link');
      }
    });

    // Scroll up button visibility
    if (scrollUp) {
      if (scrollY >= 4250) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    }

    // Change header background
    if (header) {
      if (scrollY >= 50) {
        header.classList.add('bg-header');
      } else {
        header.classList.remove('bg-header');
      }
    }
  });

  // Theme toggle button click
  themeButton?.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  });

  // ScrollReveal animations
  const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 1000,     // faster animation duration
  delay: 150,         // less initial delay
  //  reset: true // optional if you want repeat on scroll
});

sr.reveal(`.home__data, .projects__container, .footer__container`);
sr.reveal(`.home__info div`, { delay: 200, origin: 'bottom', interval: 80 });
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, { origin: 'left' });
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, { origin: 'right' });
sr.reveal(`.qualification__content, .achievements__card`, { interval: 80 });


  sr.reveal(`.home__data, .projects__container, .footer__container`);
  sr.reveal(`.home__info div`, { delay: 600, origin: 'bottom', interval: 100 });
  sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, { origin: 'left' });
  sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, { origin: 'right' });
  sr.reveal(`.qualification__content, .achievements__card`, { interval: 100 });
}
