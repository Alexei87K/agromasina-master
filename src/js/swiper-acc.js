
  
  var mySwiper  = new Swiper('.slider-sw-acc', {
    loop:true,
    slidesPerView: 1,
    // navigation: {
    //   nextEl: '.my-btn-next',
    //   prevEl: '.my-btn-prev',
    // },
   
    
  });
  
  $('.my-btn-next-acc').on('click', function(){
     mySwiper.slideNext();
  });

  $('.my-btn-prev-acc').on('click', function(){
    mySwiper.slidePrev();
});

