/*
* @Author: XM-web
* @Date:   2016-11-17 16:36:15
* @Last Modified by:   XM-web
* @Last Modified time: 2016-11-17 17:25:28
*/

(function(angular){
	'use strict';

	angular.module('moviecat.coming_soon',['ngRoute'])

	.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/coming_soon',{
			templateUrl: 'components/coming_soon/view.html',
			controller: 'comingSoonController'
		});
	}])

	.controller('comingSoonController',['$scope',
		function($scope){

	}])
})(angular)
