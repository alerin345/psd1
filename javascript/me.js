$(function() {
  $('.btn').click(function(e)
  {
    e.preventDefault();
  });
  $('.div-arrow').click(function(){
      $('html, body').animate({scrollTop:$(".banner-text").height()}, 1500);
      return false;
  });
});
