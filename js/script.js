
$(document).ready(function(){
    $('#menu-slide-out').sidenav();

    $('#search-slide-out').sidenav({
    	edge: 'right'
    });

	// Dropdown
	$(".dropdown-trigger").dropdown();
	        

	// Carousel
	// $('.carousel.carousel-slider').carousel({
	// 	fullWidth: true,
	// 	indicators: true
	// });
	$('.slider').slider({
		height: 250
	});

	// Autocomplete
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
      },
    });

});	