const hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },

  // Мои параметры
  effect: "fade",
  speed: 800,
});
/* Усложнённое задание */
// window.addEventListener("keydown", (arrowleft) => console.log("Вы нажали на кнопку Стрелка влево"));
// window.addEventListener("keydown", (arrowleft) => swiper.navigation.prevEl);
// window.addEventListener("keydown", (arrowright) => swiper.navigation.nextEl);

const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

  // Мои параметры
  speed: 800,
  autoHeight: true,
  spaceBetween: 80,
});
