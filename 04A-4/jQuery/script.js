$(document).ready(function () {
  //menu
  $('.mainmenu > li').mouseover(function () {
    $('.submenu').stop().slideDown();
    $('.nav-bg').stop().slideDown();
  });
  $('.mainmenu > li').mouseout(function () {
    $('.submenu').stop().slideUp();
    $('.nav-bg').stop().slideUp();
  });

  // 이미지슬라이드 페이드 인 페이드 아웃
  $('.imgSlide a:gt(0)').hide();

  setInterval(function () {
    $('.imgSlide a:first-child')
      .fadeOut()
      .next('a')
      .fadeIn()
      .end()
      .appendTo('.imgSlide');
  }, 3000);

  //popup
  $('.modal').click(function () {
    $('.layer-popup').show();
    $('.layer-bg').show();
  });
  $('.botton').click(function () {
    $('.layer-popup').hide();
    $('.layer-bg').hide();
  });
});
