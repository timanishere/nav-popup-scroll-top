

//-- MENU CONTROLLER STARTS HERE --//
myApp.controller('menuCtrl', function($scope) {

	//SUBMENU FOR MENU 1
	$scope.submenuList_1 = [
	'submenu 1',
	'submenu 2',
	'submenu 3',
	];

	//SUBMENU FOR MENU 2
	$scope.submenuList_2 = [
	'submenu 4',
	'submenu 5',
	'submenu 6',
	'submenu 7',
	];

	//SUBMENU FOR MENU 3
	$scope.submenuList_3 = [
	'submenu 8',
	'submenu 9',
	'submenu 10',
	'submenu 11',
	];

	//SUBMENU FOR MENU 4
	$scope.submenuList_4 = [
	'submenu 12',
	'submenu 13',
	'submenu 14',
	'submenu 15',
	];

	//SUBMENU FOR MENU 5
	$scope.submenuList_5 = [
	'submenu 16',
	'submenu 17',
	'submenu 18',
	'submenu 19',
	];

	//SHOWMENU FUNCTION
	$scope.showMenuList = true;

	$scope.showMenu = function() {
		$scope.showMenuList = !$scope.showMenuList;
		console.log('show/hide menu list is working');
	}

	//SHOW SUB MENU FUNCTIONS

	var $sml_menu_container = $('.sml-menu-container');
	var $submenuList = $('.submenu-sml-screen');

	//SUB MENU LIST 1
	$scope.showSubmenuList_1 = function() {
		$submenuList.eq(0).css('right', 0 + '%');
	}

	$scope.showSubmenuList_2 = function() {
		$submenuList.eq(1).css('right', 0 + '%');
	}

	$scope.showSubmenuList_3 = function() {
		$submenuList.eq(2).css('right', 0 + '%');
	}

	$scope.showSubmenuList_4 = function() {
		$submenuList.eq(3).css('right', 0 + '%');
	}

	$scope.showSubmenuList_5 = function() {
		$submenuList.eq(4).css('right', 0 + '%');
	}



	//GO BACK ICON
	$scope.goBack = function() {
		$submenuList.css('right', 100 + '%');
	}
});
//-- MENU CONTROLLER ENDS HERE --//