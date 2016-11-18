/*
* @Author: XM-web
* @Date:   2016-11-17 16:34:38
* @Last Modified by:   XM-web
* @Last Modified time: 2016-11-18 10:15:45
*/

'use strict';

angular.module('moviecat', [
	'ngRoute',
	'moviecat.movielist'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({ redirectTo: '/in_theaters' });
}]);



