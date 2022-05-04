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

//On Scroll Animation for the Grid Elements
window.onload = function(){
  const gridEl = document.querySelectorAll('.gridEl');

  window.addEventListener('scroll', scrollEffect);
  function scrollEffect () {
    const trigger = window.innerHeight/6 * 4; //this gets the simplified window height
    gridEl.forEach(EFFECT => {
      const gridTop = EFFECT.getBoundingClientRect().top; //gets the height of each of the div
      if(gridTop <= trigger) {
        EFFECT.style.opacity = '1';
        EFFECT.style.transform = 'translateX(0px)';
        EFFECT.style.transition = '.5s ease-in-out';
      }
      else{
        EFFECT.style.opacity = '0';
        EFFECT.style.transform = 'translateX(-50px)';
      }
    });
   
  }
}


