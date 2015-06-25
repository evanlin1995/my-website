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
			this.tab = newValue;
		};
		this.isSet = function(tabValue) {
			return this.tab === tabValue;
		}
	});

	app.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/view1'});
	}]);

})();