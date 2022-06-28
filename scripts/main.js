(function($) {
    "use strict";
  
    var nav = $('nav');
    var navHeight = nav.outerHeight();
  
    $('.navbar-toggler').on('click', function() {
      if (!$('#page-navbar').hasClass('navbar-reduce')) {
        $('#page-navbar').addClass('navbar-reduce');
      }
    })
  
    // Preloader
    $(window).on('load', function() {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
          $(this).remove();
        });
      }
    });
  
    /*--/ Star Scrolling nav /--*/
    var mainNav_height = $('#page-navbar').outerHeight() - 22;
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          var scrollto = target.offset().top - mainNav_height;
          $('html, body').animate({
            scrollTop: scrollto
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll').on("click", function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#page-navbar',
      offset: navHeight
    });
    /*--/ End Scrolling nav /--*/
  
    /*--/ Navbar Menu Reduce /--*/
    $(window).trigger('scroll');
    $(window).on('scroll', function() {
      var pixels = 50;
      var top = 1200;
      if ($(window).scrollTop() > pixels) {
        $('.navbar-expand-md').addClass('navbar-reduce');
        $('.navbar-expand-md').removeClass('navbar-trans');
      } else {
        if (!$('#navbarDefault').hasClass('show')) {
          $('.navbar-expand-md').removeClass('navbar-reduce');
        }
        $('.navbar-expand-md').addClass('navbar-trans');
      }
      if ($(window).scrollTop() > top) {
        $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
      } else {
        $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
      }
    });
  
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
    });
  
  })(jQuery);