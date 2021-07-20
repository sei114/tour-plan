const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },

  // Мои параметры
  effect: "fade",
  speed: 800,
});

/* Усложнённое задание */
// window.addEventListener("keydown", (arrowleft) => console.log("Вы нажали на кнопку Стрелка влево"));
// window.addEventListener("keydown", (arrowleft) => swiper.navigation.prevEl);
// window.addEventListener("keydown", (arrowright) => swiper.navigation.nextEl);
