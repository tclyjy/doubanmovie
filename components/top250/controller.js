/*
* @Author: XM-web
* @Date:   2016-11-17 16:36:15
* @Last Modified by:   XM-web
* @Last Modified time: 2016-11-17 16:46:40
*/

(function(angular){
	'use strict';

	angular.module('moviecat.in_theaters',['ngRoute'])

	.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/top250',{
			templateUrl: 'components/top250/view.html',
			controller: 'top250Controller'
		});
	}])

	.controller('top250Controller',['$scope',
		function($scope){

	}])
})(angular)
