$(document).ready(function ($) {
    'use strict';


/* ---------------------------------------------
     page  Prealoader
 --------------------------------------------- */
    $(window).on('load', function () {
        $("#loading-center-page").fadeOut();
        $("#loading-page").delay(400).fadeOut("slow");
    });


    /* ---------------------------------------------
  Accordion
 --------------------------------------------- */

        $(".collapse.in").each(function(){
            $(this).siblings(".panel-heading").find(".icon-accordion").addClass(" arrow_carrot-up").removeClass(" arrow_carrot-down ");
        });

        $(".collapse").on('show.bs.collapse', function(){
            $(this).parent().find(".icon-accordion").removeClass(" arrow_carrot-down ").addClass(" arrow_carrot-up");
        }).on('hide.bs.collapse', function(){
            $(this).parent().find(".icon-accordion").removeClass("arrow_carrot-up").addClass(" arrow_carrot-down ");

      });



    /* ---------------------------------------------
 owl caroussel
 --------------------------------------------- */




$('.testimonial-caroussel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav:false,
    dots:true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1

        },
        1200: {
            items: 1
        }
    }
});



$('.client-caroussel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 4

        },
        1200: {
            items: 5
        }
    }
});



/*----------------------------------------------------*/
/*  VIDEO POP PUP
/*----------------------------------------------------*/

    $('.video-modal').magnificPopup({
            type: 'iframe',

                iframe: {
                    patterns: {
                        youtube: {

                            index: 'youtube.com',
                            src: 'https://www.youtube.com/embed/7e90gBu4pas'

                                }
                            }
                        }
        });
/* ---------------------------------------------
 Back top page scroll up
 --------------------------------------------- */


$.scrollUp({
    scrollText: '<i class="arrow_up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});


/* ---------------------------------------------
 WoW plugin
 --------------------------------------------- */

new WOW().init({
    mobile: true,
});

/* ---------------------------------------------
 Smooth scroll
 --------------------------------------------- */

  $('a.section-scroll[href*="#"]:not([href="#"])').on('click', function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
        event.preventDefault();
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 750);
            return false;
        }
    }
});



/*----------------------------------------
 Newsletter Subscribe
 --------------------------------------*/

    $(".subscribe-mail").ajaxChimp({
        callback: mailchimpCallRep,
        url: "mailchimp-post-url" //Replace this with your own mailchimp post URL. Just paste the url inside "".
    });

function mailchimpCallRep(resp)
{
    if (resp.result === "success") {
        $(".sucess-message").html(resp.msg).fadeIn(1000);
        $(".error-message").fadeOut(500);
    } else if (resp.result === "error") {
        $(".error-message").html(resp.msg).fadeIn(1000);
    }
}

  });

  function off() {
    $("#toast").fadeOut();
    $("#overlay").delay(300).fadeOut("slow");
    //document.getElementById("overlay").style.display = "none";
    //document.getElementById("toast").style.display = "none";
  }



  $('.accordion__header').click(function(e) {
	e.preventDefault();
	var currentIsActive = $(this).hasClass('is-active');
	$(this).parent('.accordion').find('> *').removeClass('is-active');
	if(currentIsActive != 1) {
		$(this).addClass('is-active');
		$(this).next('.accordion__body').addClass('is-active');
	}
});

$('#sponsor-carousel').carousel({
    interval: 3000,
    cycle: true
  }); 