jQuery(document).ready(function($){
		$('.uneven').slick({
		    dots: true,
			  infinite: true,
				arrows:false,
			  speed: 2000,
			  pauseOnHover:false,
			  autoplay: true,
			  autoplaySpeed: 7000,
			  fade: true,
			  cssEase: 'linear'
		});
		
	$('.carousels').slick({
  dots: true,
	arrows:false,
  infinite: true,
	autoplay: true,
  speed: 1000,
	autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
		
});