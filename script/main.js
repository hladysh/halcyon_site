
/***************** Flexsliders ******************/

$(window).load(function() {

	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: true,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
	});

});

/***************** Flexsliders  end ******************/