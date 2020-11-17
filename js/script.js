$("#customFile").change(function(){
    $("#fileName").text(this.files[0].name);
});

  // event pada saat link di klik
$('.page-scroll').on('click', function(e){
	
	// ambil isi href
	var href = $(this).attr('href');
	// tangkap elemen yang bersangkutan
	var elementHref = $(href);

	//pindahkan scroll
	$('html,body').animate({
		scrollTop: elementHref.offset().top - 50
	}, 500, 'swing');

	e.preventDefault();

});