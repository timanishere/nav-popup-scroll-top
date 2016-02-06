
$(document).ready(function() {

	var $scroll_Top_Btn = $('.scroll-top-btn');

	$scroll_Top_Btn.on('click', function() {
	var $containerTop = $('.container').offset().top;
	var $body = [$('html'), $('body')];

		$body[0].animate({
			scrollTop: $containerTop
		}, 1000);

		$body[1].animate({
			scrollTop: $containerTop
		}, 1000);

		console.log('working');
	});

	$(window).scroll(function() {

	var wScroll = $(this).scrollTop();
	var $bodyMid = $('body').height() * 0.5;

		if(wScroll > $bodyMid ) {
			$scroll_Top_Btn.css('opacity', 1);
		} else {
			$scroll_Top_Btn.css('opacity', 0);
		}
	});
	
});
