$(document).ready(function () {
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

  /* Усложнённое задание. Не доделал */
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

  /* Мобильное меню на JS */
  /*
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке меню!");
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
  });
  */
  /* /Мобильное меню на JS */

  /* Мобильное меню на JQuery */
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    // console.log("Клик по кнопке меню!");
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });
  /* /Мобильное меню на JQuery */

  /* Модальные окна */
  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  /* Одно модальное окно */
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  /* Два модальных окна */
  /*
  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  */

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  /* /Модальные окна */

  /* Обработка форм */
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be at least 2 letters long",
        },
        email: {
          required: "Email is required",
          email: "Your email address must be in the format of name@domain.com",
        },
        emailOnly: {
          required: "Email is required",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone number is required",
          minlength: "Please enter at least 10 digits",
        },
      },
    });
  });

  /* jQuery Mask Plugin */
  $(".phone-rus").mask("+7(999)999-99-99", { translation: { 9: { pattern: /[0-9*]/ } } });
  // $(".clear-if-not-match").mask("+7(999)999-99-99", { clearIfNotMatch: true });
  // $(".selectonfocus").mask("+7(999)999-99-99", { selectOnFocus: true });

  /* Aos plugin */
  AOS.init();
});

/* Убираем анимацию на мобильных устройствах */
if (window.matchMedia("(max-width: 768px)").matches) {
  animOff();
}

function animOff() {
  document.querySelector(".footer__logo").removeAttribute("data-aos");
  document.querySelector(".activities__card-1").removeAttribute("data-aos");
  document.querySelector(".activities__card-2").removeAttribute("data-aos");
  document.querySelector(".activities__card-3").removeAttribute("data-aos");
  document.querySelector(".activities__card-4").removeAttribute("data-aos");
}
