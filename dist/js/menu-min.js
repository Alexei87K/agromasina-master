$( document ).ready(function() {

  $('#openNav').on('click', function(){
    $('.overlay').css('width', '100%');
  });
  $('#closeNav').on('click', function(){
    $('.overlay').css('width', '0%');
  });
  
  // function openNav() {
  //   document.getElementById("myNav").style.width = "100%";
  // }
  
  // function closeNav() {
  //   document.getElementById("myNav").style.width = "0%";
  // }
  });