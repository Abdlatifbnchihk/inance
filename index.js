const menu = document.getElementById('menu');
const bttnOpen = document.getElementById('bttn-open');
const bttnClose = document.getElementById('bttn-close');
const list = document.getElementById('navbar-list');


menu.addEventListener("click", function(){
    bttnClose.classList.toggle("active");
    bttnOpen.classList.toggle("active");
    list.classList.toggle("active");
});


/* swiper js */  
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });