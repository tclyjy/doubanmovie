/*
 * @Author: XM-web
 * @Date:   2016-11-17 16:34:38
 * @Last Modified by:   XM-web
 * @Last Modified time: 2016-11-22 17:21:51
 */

'use strict';

angular.module('moviecat', [
        'ngRoute',
        'moviecat.moviedetail',
        'moviecat.movielist',
       // 'pagingModule'
    ])
    .constant('moviecatConstant',{ //控制器常量依赖管理
        countNum:10,
        listApiAddress: 'https://api.douban.com/v2/movie/',
        detailApiAddress: 'https://api.douban.com/v2/movie/subject/'
    })
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
    	})
	}])
	.controller('searchController',['$scope','$route',function($scope,$route){
    	$scope.input = '';
    	$scope.search = function(){
    		$route.updateParams({ movieclass:'search', q: $scope.input });
    	}
    	
    }])
