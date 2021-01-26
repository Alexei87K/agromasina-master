
  
  var mySwiper  = new Swiper('.slider-sw', {
    loop:true,
    spaceBetween: 5,
    slidesPerView: 2,

    breakpoints: {
      
      1200: {
        slidesPerView: 4,
        
      }
    }
    // navigation: {
    //   nextEl: '.my-btn-next',
    //   prevEl: '.my-btn-prev',
    // },
   
    
  });
  
  $('.my-btn-next').on('click', function(e){
    e.preventDefault();
     mySwiper.slideNext();
  });

  $('.my-btn-prev').on('click', function(e){
    e.preventDefault();
    mySwiper.slidePrev();
});

