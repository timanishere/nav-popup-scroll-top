function popup() {
	var $close_btn = $('.close-btn');
	var $popup_container = $('.popup-container');

	setTimeout(function() {
		$popup_container.animate({'opacity': 1});
		$popup_container.css('display', 'flex');
	}, 5000);

	$close_btn.click(function() {
		$popup_container.animate({'opacity': 0});
		$popup_container.css('display', 'none');
	});
}