//------ MENU FUNCTION STARTS HERE ------//

// -- TOGGLE MENU LIST --//
$(function() {
	var $burgerMenu = $('.burger-menu');
	var $menuList = $('.menu-sml-screen');

	$burgerMenu.click(function() {
		//-- Make it hide/show
		//$menuList.toggle();

		//-- Make it slide up/down
		$menuList.slideToggle();
	});

// -- HIDES MENU LIST --//
	$(window).resize(function() {
		var browserScreen = $(this).innerWidth();
		var breakpoint = 630;

		if(browserScreen > breakpoint) {
			$menuList.css('display', 'none');
		}
		console.log('Your current broser size is: ' + browserScreen);
	});

});

//------ MENU FUNCTION ENDS HERE ------//