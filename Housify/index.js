//Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "slide",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction:false,
    },
  });

  
//Adding some Javascript for the Nav Menu
const navigation = document.querySelectorAll('.navigation');
const toggle = document.querySelector('.toggle');

navigation.forEach(Element => {
  Element.addEventListener('click', e => toggle.checked = false);
});


