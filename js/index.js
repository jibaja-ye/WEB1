var swiper = new Swiper('.mySwiper-1', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 1,
      spaceBetween: 20,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  
});
var swiper = new Swiper('.mySwiper-2', {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 20,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints :{
      0: {
        slidesPerView:1,
      },
      s20: {
        slidesPerView:2,
      },
      950: {
        slidesPerView:3,
      },
    }

});

let tabInput=document.querySelectorAll("tabInput");

  tabInput.forEach(function(input){


      input.addEventListener('change', function(){
        let id=input.ariaValueMax;
        let thisSwiper=document.getElementBy('swiper' +id)
        thisSwiper.swiper.update();
} )
});