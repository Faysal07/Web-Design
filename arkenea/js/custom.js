(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        // Owl Carousel js
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

        // Sticky Navbar js
        window.addEventListener("scroll", function(){
            var header = this.document.querySelector("header");
            header.classList.toggle("sticky", this.window.scrollY > 0);
        });

    });

    jQuery(window).load(function(){
        
    });

    // Can also be used with $(document).ready()
    $(window).load(function() {   
        
    });
    
}(jQuery));	