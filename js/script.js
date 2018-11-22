
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
      limit: 5
    });

    var instance = M.Autocomplete.getInstance($('input.autocomplete'));

    $('#icon_prefix').change(function() {
    	var museu = instance.el.value;

    	switch (museu) {
    		case "Museu Caixa Cultural":
    			window.location = "https://williammeneses.github.io/projeto-integrado-1/museu-caixa-cultural.html";
    			break;
    		case "Museu da Fotografia":
    			window.location = "https://williammeneses.github.io/projeto-integrado-1/museu-fotografia-fortaleza.html";
    			break;
    		case "Museu de Arte Conteporanea":
    			window.location = "https://williammeneses.github.io/projeto-integrado-1/sem-info.html";
    			break;
    		case "Museu da Industria":
    			window.location = "https://williammeneses.github.io/projeto-integrado-1/sem-info.html";
    			break;
    		case "Museu de Arte UFC":
    			window.location = "https://williammeneses.github.io/projeto-integrado-1/mauc.html";
    			break;
    		case "Museu do Ceará":
    			window.location = "https://williammeneses.github.io/projeto-integrado-1/sem-info.html";
    			break;
    		case "Espaço Cultural Unifor":
    			window.location = "https://williammeneses.github.io/projeto-integrado-1/sem-info.html";
    			break;
    		case "Museu da Boneca de Pano":
    			window.location = "https://williammeneses.github.io/projeto-integrado-1/sem-info.html";
    			break;
    		case "Museu do Automóvel":
    			window.location = "https://williammeneses.github.io/projeto-integrado-1/sem-info.html";
    			break;
    	}
    });


    $('.collapsible').collapsible();
});	