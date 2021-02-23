
(function ($) {
	"use strict";

// mainSlider
	function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: true,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="lnr lnr-arrow-left"></i>prev</button>',
		nextArrow: '<button type="button" class="slick-next"><i class="lnr lnr-arrow-right"></i>Next</button>',
		arrows: true,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}

mainSlider();


/* service-active */
$('.service-active').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="lnr lnr-arrow-left"></i>prev</button>',
	nextArrow: '<button type="button" class="slick-next"><i class="lnr lnr-arrow-right"></i>Next</button>',
	responsive:[
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true		  
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
	    }
	  }
		  
		  
		  
		  
	]	  
	});
	/* service-active */
$('.case-active').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<button type="button" class="slick-prev"> <i class="far fa-arrow-alt-circle-left"></i> </button>',
	nextArrow: '<button type="button" class="slick-next"> <i class="far fa-arrow-alt-circle-right"></i> </button>',
	responsive:[
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true		  
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
	    }
	  }
		  
		  
		  
		  
	]	  
	});	
	/* testimonial */
$('.testimonial-active').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<button type="button" class="slick-prev"> <i class="far fa-arrow-alt-circle-left"></i> </button>',
	nextArrow: '<button type="button" class="slick-next"> <i class="far fa-arrow-alt-circle-right"></i> </button>',
	responsive:[
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true		  
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
	    }
	  }
		  
		  
		  
		  
	]	  
	});	
	/* brand */
$('.brand-active').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 6,
	slidesToScroll: 1,
	arrows: false,
	responsive:[
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true		  
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
	    }
	  }
		  
		  
		  
		  
	]	  
	});
		// nice select js
		$("select").niceSelect();
		
		// BOTTOM SCROLL TOP BUTTON

              // declare variable
              var scrollTop = $(".scrollTop");
            
              $(window).scroll(function() {
                // declare variable
                var topPos = $(this).scrollTop();
            
                // if user scrolls down - show scroll to top button
                if (topPos > 100) {
                  $(scrollTop).css("opacity", "1");
            
                } else {
                  $(scrollTop).css("opacity", "0");
                }
            
              }); // scroll END
            
              //Click event to scroll to top
              $(scrollTop).click(function() {
                $('html, body').animate({
                  scrollTop: 0
                }, 800);
                return false;
            
			  }); // click() scroll top EMD
			  
			  		
		$("view-video").magnificPopup({
					type: 'image',
					gallery:{
					enabled: true
					}
				});
		
})(jQuery);	

