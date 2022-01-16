(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER
         * ----------------------------------------------------------------------------------------
         */
        $(window).load(function () {
            $('.preloader').fadeOut();
            $('.preloader-area').delay(350).fadeOut('slow');
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  CHANGE MENU BACKGROUND
         * ----------------------------------------------------------------------------------------
         */
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROOL
         * ----------------------------------------------------------------------------------------
         */
        $('a.smooth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  WORK JS
         * ----------------------------------------------------------------------------------------
         */

        $('.items').mixItUp();

        $(".element").typed({
            strings: ["WE ARE AWESOME CREATIVE AGENCY"],
            typeSpeed: 0
        });

        $(".slider").owlCarousel({
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true
        });
    });
})(jQuery);