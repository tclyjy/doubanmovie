/*
* @Author: XM-web
* @Date:   2016-11-17 16:34:38
* @Last Modified by:   XM-web
* @Last Modified time: 2016-11-17 17:25:50
*/

'use strict';

angular.module('moviecat', [
	'ngRoute',
	'moviecat.in_theaters',
	'moviecat.coming_soon',
	'moviecat.top250'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({ redirectTo: '/in_theaters' });
}]);



