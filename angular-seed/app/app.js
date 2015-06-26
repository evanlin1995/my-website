'use strict';

(function() { 
	// Declare app level module which depends on views, and components
	// var app = angular.module('myApp', [
	//   'ngRoute',
	//   'myApp.view1',
	//   'myApp.view2',
	//   'myApp.version'
	// ]);

	var app = angular.module('myApp', [
	  'ngRoute',
	  'myApp.view1',
	  'myApp.view2',
	  'myApp.version'
	]);

	app.controller('TabController', function($scope) {
		// $scope.visible = false;
		this.tab = 1;
		this.setTab = function(newValue) {
			console.log('Old value was ' + this.tab);
			this.tab = newValue;
			console.log('New value is ' + this.tab);
		};
		this.isSet = function(tabValue) {
			return this.tab === tabValue;
		}
	});

	app.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/view1'});
	}]);

})();