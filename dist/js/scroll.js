$(function () {
  // bat su kien scroll

  //window la object ca web
  $(window).scroll(function () { 
    const position = $(window).scrollTop();
    if (position > 300) {
      $("header").addClass("fixed");
      $(".totop").addClass("fixed");
    }
    else {
      $("header").removeClass("fixed");
      $(".totop").removeClass("fixed");
    }
  });
});

  
