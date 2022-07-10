$(document).ready(function() {
  

  // Make Navbar full screen on toggler click
  $(document).ready(function() {
    var $nav = $(".nav-slider");
    var $navToggler = $(".navbar-toggler");
    var $navBookBtn = $(".nav-book-btn");
    var $navBookBtnMain = $(".book-nav-link");
    $navToggler.on("click", function() {
      $nav.toggleClass("navbar-fullscreen");
      $navBookBtn.toggleClass("nav-book-btn-hidden");
      $navBookBtnMain.toggleClass("book-nav-link-active");
    });
  });

  // Make navbar Book Now btn appear on scroll after jumbotron btn
  $(document).scroll(function() {
    var $nav = $(".navbar");
    var $home = $("#home");
    var $bookBtn = $(".nav-book-btn");
    $bookBtn.toggleClass(
      "book-btn-scrolled",
      $(this).scrollTop() > 0.5 * $home.height()
    );
  });

  // Make nav links appear on toggle
  $(document).ready(function() {
    $(".navbar-toggler").on("click", function() {
      $(".nav-link").toggleClass("nav-links-appear");
    });
  });

  // Navbar collapse on link click
  $(".nav a").on("click", function() {
    if ($(".navbar-toggler").css("display") != "none") {
      $(".navbar-toggler").trigger("click");
    }
  });

  // Transition hamburger icon to 'X' on click
  $(".navbar-toggler").on("click", function() {
    $(".bar1").toggleClass("bar1Active");
    $(".bar2").toggleClass("bar2Active");
    $(".bar3").toggleClass("bar3Active");
  });
  
  // Fade out jumbotron mouse icon on scroll
  $(window).scroll(function(){
    $(".mouse-scroll").css("opacity", 1 - $(window).scrollTop() / 450);
  });
  
});