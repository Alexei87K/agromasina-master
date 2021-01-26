$( document ).ready(function() {

  $('#hamb').on('click', function(){
    $('.overlay').css('width', '100%');
  });
  $('.closebtn').on('click', function(){
    $('.overlay').css('width', '0%');
  });
  
  // function openNav() {
  //   document.getElementById("myNav").style.width = "100%";
  // }
  
  // function closeNav() {
  //   document.getElementById("myNav").style.width = "0%";
  // }
  });