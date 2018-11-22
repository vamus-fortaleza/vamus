
$(document).ready(function(){
    $('#menu-slide-out').sidenav();

    $('#search-slide-out').sidenav({
    	edge: 'right'
    });

	// Dropdown
	$(".dropdown-trigger").dropdown();
	        

	// Carousel
	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: true
	});

	$('.slider').slider({
		height: 250
	});

	// Autocomplete
    $('input.autocomplete').autocomplete({
      data: {
        "Museu Caixa Cultural": null,
		"Museu da Fotografia": null,
		"Museu de Arte Conteporanea": null,
		"Museu da Industria": null,
		"Museu de Arte UFC": null,
		"Museu do Ceará": null,
		"Espaço Cultural Unifor": null,
		"Museu da Boneca de Pano": null,
		"Museu do Automóvel": null
      },
    });

    $('.collapsible').collapsible();
});	