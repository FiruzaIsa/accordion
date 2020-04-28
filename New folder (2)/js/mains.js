$(document).ready(function () {
   $('.off-canvas-menu-btn').on('click', function() {
          event.preventDefault();
          $('.off-canvas-left-bar').addClass('active');
          $('.off-canvas-fixed-close').addClass('active');
      });

      $('.off-canvas-close').on('click', function() {
              $('.off-canvas-left-bar').removeClass('active')
              $('.off-canvas-fixed-close').removeClass('active')
      }); 

      $('.off-canvas-fixed-close').on('click', function() {
          $('.off-canvas-left-bar').removeClass('active')
          $(this).removeClass('active')
      });
        
});

$(function() {
 
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('#toTop').fadeIn();
    }else {
    $('#toTop').fadeOut();
    }
  });
   
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });

});

$(function(){
var accordion=document.getElementsByClassName('accordion');
   $(accordion).click(function(){
  $(this).toggleClass("open");
})


});