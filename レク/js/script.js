$(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("active");
    $(".header-nav").toggleClass("active");
  });
});