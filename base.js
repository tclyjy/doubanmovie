/*
 * @Author: XM-web
 * @Date:   2016-11-17 16:34:38
 * @Last Modified by:   XM-web
 * @Last Modified time: 2016-11-21 14:37:06
 */

'use strict';

angular.module('moviecat', [
        'ngRoute',
        'moviecat.movielist'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
    }])
    .controller('navController', ['$scope', '$location', function($scope, $location) {
    	//监视$location变化
    	$scope.location = $location;
    	$scope.$watch('location.path()', function(now) {
    		if(now.startsWith('/in_theaters'))
    			$scope.type = 'in_theaters';
    		if(now.startsWith('/coming_soon'))
    			$scope.type = 'coming_soon';
    		if(now.startsWith('/top250'))
    			$scope.type = 'top250';
    	});
    }])
