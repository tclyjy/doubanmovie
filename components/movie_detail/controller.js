/*
 * @Author: XM-web
 * @Date:   2016-11-17 16:36:15
 * @Last Modified by:   XM-web
 * @Last Modified time: 2016-11-21 19:10:55
 */

(function(angular) {
    'use strict';
    var module = angular.module('moviecat.moviedetail', ['ngRoute', 'moviecat.services.http']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/detail/:id', {
            templateUrl: 'components/movie_detail/view.html',
            controller: 'movieDetailController'
        });
    }]);

    module.controller('movieDetailController', ['$scope', '$routeParams', '$route', 'httpService','moviecatConstant',
        function($scope, $routeParams, $route, httpService,moviecatConstant) {
            //设计暴露的数据
            $scope.movie = {};
            $scope.title='Loding...';
            var id = parseInt($routeParams.id);
            //测试$http服务
            httpService.jsonp(moviecatConstant.detailApiAddress + id, {},
                function(data) {
                    $scope.movie = data;
                    $scope.$apply();
                    // $apply的作用就是让指定的表达式重新同步
                });
        }
    ])
})(angular);
