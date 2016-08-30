$(document).ready(function() {
	$('.start').on('click',function() {
		$(this).fadeOut();
		
		$('.bg').css('background-position','top right');
		$('.bg').css('transition','2s');
		
		setTimeout(function() {
			$('.rocket').css('transform','translate(-80%, -70%)');
			$('.rocket').css('transition','0.5s');
		},1000);

		setTimeout(function() {
			$('.rocket').css('transform','translate(300%, -70%)');
			$('.rocket').css('transition','0.8s');
			// $('.bg').fadeOut('slow');
			// $('#content').fadeIn('slow');
		},1500);
	});
});