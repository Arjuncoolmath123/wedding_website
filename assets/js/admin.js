$(document).ready(function(){
    $('.sidebar-menu ul li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
  });
  });