// Swiper
const swiper = new Swiper(".about-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  simulateTouch: true,
  touchRatio: 1.2,
});

const swiperProducts = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    512: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
