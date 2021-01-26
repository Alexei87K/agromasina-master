$(function() {
  $(".fancyboxIframe").fancybox({
    maxWidth	: 900,
    maxHeight	: 600,
    fitToView	: false,
    width		: '90%',
    height		: '90%',
    autoSize	: false,
    closeClick	: false,
    openEffect	: 'none',
    closeEffect	: 'none',
    iframe: {
      scrolling : 'auto',
      preload   : true
    }
  });
});