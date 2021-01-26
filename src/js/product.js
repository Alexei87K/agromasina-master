$('.products').hover(function(e) {
  // console.log($(e.currentTarget).children( '.agricol__box-l' ));
  
    $(this).find( '.products__box' ).toggleClass( "products__active" );

    $(this).find( '.products__text' ).toggleClass( "products__active-text" );   
  
     
});