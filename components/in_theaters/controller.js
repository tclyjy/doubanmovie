/*
* @Author: XM-web
* @Date:   2016-11-17 16:36:15
* @Last Modified by:   XM-web
* @Last Modified time: 2016-11-17 16:44:48
*/

(function(angular){
	'use strict';

	angular.module('moviecat.in_theaters',['ngRoute'])

	.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/in_theaters',{
			templateUrl: 'components/in_theaters/view.html',
			controller: 'inTheatersController'
		});
	}])

	.controller('inTheatersController',['$scope',
		function($scope){

	}])
})(angular)
