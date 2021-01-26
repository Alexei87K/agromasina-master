$( document ).ready(function() {
  
  $('.header__sub-menu ul').hide();
        
          
  if ($(window).width() >= 1200) {
    $(".dropdown").mouseover(function () {   
      //     $(this).parent(".header__sub-menu").children("ul").fadeIn();
          $(this).find("i.fa").addClass("fa-angle-up");     
    });
    $(".dropdown").mouseleave(function () {   
      //     $(".header__sub-menu ul").fadeOut();
          $(this).find("i.fa").removeClass("fa-angle-up");     
    });
//     $(document.body).click(function () {   
//       $(".header__sub-menu ul").fadeOut();
//       $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");     
// });
  }else{
    $(".header__sub-menu a").click(function () {   
          $(this).parent(".header__sub-menu").children("ul").slideToggle("200"); 
          $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");     
    });
  }
  
  
  });