function changeLanguage(e) {
	var id = $(e).data('id')
	$('.country').attr('class','country')
	$('.id-content').hide()
	$('.en-content').hide()
	$('#'+id+'-country').attr('class','country active')
	$('.'+id+'-content').fadeIn('slow')
	window.history.pushState("", "", "https://interaktif.tempo.co/proyek/kisah-di-balik-terali-besi/index.html?lg="+id+"");
	$('#id-country-dropdown').data('id',0)
	$('#en-country-dropdown').data('id',0)
	$('.dropdown').addClass('close').removeClass('open');
}  
function dropdown(e) {
	if ($(e).data('id') != 1) {
	  $('.dropdown').addClass('open').removeClass('close');
	  $(e).data('id',1)
	} else {
	  $('.dropdown').addClass('close').removeClass('open');
	  $(e).data('id',0)
	}
}
$(document).ready(function(){
    var url = new URL(document.URL);
	var urlP = url.searchParams;
	var language = 'id';
	if (urlP.has('lg')) {
		language = urlP.get('lg')
	}
	$('.id-content').hide()
	$('.en-content').hide()
	$('#'+language+'-country').attr('class','country active')
	$('.'+language+'-content').fadeIn('slow')
    window.history.pushState("", "", "https://interaktif.tempo.co/proyek/kisah-di-balik-terali-besi/index.html?lg=id");
    
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

    $('.tutup').click(function(){
        $('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
    })
})