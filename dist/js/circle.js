$(function(){
  var i = 0;

  $('.arrowup').on('click', function(){
     $('.circle-blck .circle').eq(i).removeClass('visible');
     $('.small-circle .abs').eq(i).removeClass('show');
  i++;
  if (i>=$('.circle-blck .circle').length)
  {
    i = 0;
  }
  $('.circle-blck .circle').eq(i).addClass('visible');
  $('.small-circle .abs').eq(i).addClass('show');
});

$('.arrowdown').on('click', function(){
     $('.circle-blck .circle').eq(i).removeClass('visible');
     $('.small-circle .abs').eq(i).removeClass('show');
  i--;
  if (i<0)
  {
    i = $('.circle-blck .circle').length - 1;;
  }
  $('.circle-blck .circle').eq(i).addClass('visible');
  $('.small-circle .abs').eq(i).addClass('show');
});
});