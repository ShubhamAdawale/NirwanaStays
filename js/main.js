/*  ---------------------------------------------------
    Template Name: NirwanaStays
    Description: NirwanaStays Hotel Html Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

  /*------------------
      Preloader
  --------------------*/
  $(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });

  /*------------------
      Background Set
  --------------------*/
  $('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });

  //Offcanvas Menu
  $(".canvas-open").on('click', function () {
    $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
    $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").removeClass("active");
  });

  // Search model
  $('.search-switch').on('click', function () {
    $('.search-model').fadeIn(400);
  });

  $('.search-close-switch').on('click', function () {
    $('.search-model').fadeOut(400, function () {
      $('#search-input').val('');
    });
  });

  /*------------------
      Navigation
  --------------------*/
  $(".mobile-menu").slicknav({
    prependTo: '#mobile-menu-wrap',
    allowParentLinks: true
  });

  /*------------------
      Hero Slider
  --------------------*/
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    mouseDrag: false
  });

  /*------------------------
      Testimonial Slider
  ----------------------- */
  $(".testimonial-slider").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    loop: true,
    smartSpeed: 1200,
    nav: true,
    navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"]
  });

  /*------------------
      Magnific Popup
  --------------------*/
  $('.video-popup').magnificPopup({
    type: 'iframe'
  });

  /*------------------
      Date Picker
  --------------------*/
  $(".date-input").datepicker({
    minDate: 0,
    dateFormat: 'dd MM, yy'
  });

  /*------------------
      Nice Select
  --------------------*/
  $("select").niceSelect();

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () { myFunction() };

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }


  // Time Interval of slide show
  $('#carouselExampleIndicators').carousel({
    interval: 2500
  });


  // Slider About-----------------------
  function slider(flag, num) {
    var current = $(".item.current"),
      next,
      index;
    if (!flag) {
      next = current.is(":last-child") ? $(".item").first() : current.next();
      index = next.index();
    } else if (flag === 'dot') {
      next = $(".item").eq(num);
      index = num;
    } else {
      next = current.is(":first-child") ? $(".item").last() : current.prev();
      index = next.index();
    }
    next.addClass("current");
    current.removeClass("current");
    $(".dot").eq(index).addClass("current").siblings().removeClass("current");
  }
  var setSlider = setInterval(slider, 2500);

  $(".button").on("click", function () {
    clearInterval(setSlider);
    var flag = $(this).is(".prev") ? true : false;
    slider(flag);
    setSlider = setInterval(slider, 2500);
  });

  $(".dot").on("click", function () {
    if ($(this).is(".current")) return;
    clearInterval(setSlider);
    var num = $(this).index();
    slider('dot', num);
    setSlider = setInterval(slider, 2500);
  });

  // Vanilltop
  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $('.eco_navbar'),
        sd = $('.js-scroll-wrap');

      if (st > 150) {
        if (!navbar.hasClass('scrolled')) {
          navbar.addClass('scrolled');
        }
      }
      if (st < 150) {
        if (navbar.hasClass('scrolled')) {
          navbar.removeClass('scrolled sleep');
        }
      }
      if (st > 350) {
        if (!navbar.hasClass('awake')) {
          navbar.addClass('awake');
        }

        if (sd.length > 0) {
          sd.addClass('sleep');
        }
      }
      if (st < 350) {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
        if (sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };
  scrollWindow();

  // Gallery-----------------
  var thumbnails = document.getElementById("thumbnails")
  var imgs = thumbnails.getElementsByTagName("img")

  var main = document.getElementById("main")
  var counter = 0;

  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i]


    img.addEventListener("click", function () {
      main.src = this.src
    })

  }


// ///////////////////////////


})(jQuery);