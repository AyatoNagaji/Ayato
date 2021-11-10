$(function(){
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 50);
       return false;
    });
  });