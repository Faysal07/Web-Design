(function ($) {
    "use strict";

    // Preloader
    $(window).load(function () {
        'use strict';
        $('.loader').fadeOut(3500);
        $('.preloader-tp').delay(3000).fadeOut('slow');

    })

    jQuery(document).ready(function ($) {

        //  Default js start
        $('.navbar-toggle').click(function () {
            if ($(this).hasClass('click-effect')) {
                $(this).removeClass('click-effect');
            } else {
                $(this).addClass('click-effect');
            }
        });


        //  Default js end

        //Slider
        $(".banner-slider-area").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            nav: false,
        });


        //Slider
        $(".future-list-box").owlCarousel({
            items: 3,
            loop: true,
            nav: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 3,
                }
            }
        });

    });

    jQuery(window).load(function () {

    });

}(jQuery));
