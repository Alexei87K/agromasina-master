$(document).ready(function(){
  
    
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
      
        loop: true,
        
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,

          // renderBullet: function (index, className) {
          //   return '<span class="' + className + '">' + (index + 1) + '</span>';
          // }
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      
       
      });
  
  
});