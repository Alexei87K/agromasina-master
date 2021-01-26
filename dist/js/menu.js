$( document ).ready(function() {
  
  $('.header__sub-menu ul').hide();
        
          
  if ($(window).width() >= 1200) {
    $(".header__sub-menu a").mouseover(function () {   
          $(this).parent(".header__sub-menu").children("ul").fadeIn();
          $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");     
    });
    $(".header__sub-menu ul").mouseleave(function () {   
          $(".header__sub-menu ul").fadeOut();
          $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");     
    });
  }else{
    $(".header__sub-menu a").click(function () {   
          $(this).parent(".header__sub-menu").children("ul").slideToggle("200"); 
          $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");     
    });
  }
  
  
  });