(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        
        //Slider
        $(".banner-slider").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            nav: true,
            navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        });

        //  Default js start
        $('.navbar-toggle').click(function () {
            if ($(this).hasClass('click-effect')) {
                $(this).removeClass('click-effect');
            } else {
                $(this).addClass('click-effect');
            }
        });
//          Default js end

        //Slider
        $(".clint-slider").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            nav: false,
        });
        


    });


    jQuery(window).load(function(){

        
    });


    // Can also be used with $(document).ready()
$(window).load(function() {


    
});
    
    
}(jQuery));	