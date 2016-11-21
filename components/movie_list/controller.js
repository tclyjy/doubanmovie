/*
 * @Author: XM-web
 * @Date:   2016-11-17 16:36:15
 * @Last Modified by:   XM-web
 * @Last Modified time: 2016-11-21 19:13:13
 */

(function(angular) {
    'use strict';
    var module = angular.module('moviecat.movielist', ['ngRoute', 'moviecat.services.http']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:movieclass/:page', {
            templateUrl: 'components/movie_list/view.html',
            controller: 'movieListController'
        });
    }]);

    module.controller('movieListController', ['$scope', '$routeParams', '$route', 'httpService','moviecatConstant',
        function($scope, $routeParams, $route, httpService,moviecatConstant) {
            //设计暴露的数据
            $scope.subjects = [];
            $scope.title='Loding...';

            var page = parseInt($routeParams.page);
            $scope.currentPage = page;
            //分页数据
            var countNum = moviecatConstant.countNum;
            var startNum = (page - 1) * countNum;
            //测试$http服务
            httpService.jsonp(moviecatConstant.listApiAddress + $routeParams.movieclass, { start: startNum, count: countNum, q: $routeParams.q },
                function(data) {
                    $scope.title = data.title;
                    $scope.subjects = data.subjects;
                    $scope.totalCount = data.total;
                    $scope.totalPages = Math.ceil(data.total / countNum);
                    $scope.repeatPages = [];
                    for (var i = 0; i < $scope.totalPages; i++) {
                        $scope.repeatPages[i] = i + 1;
                    }
                    //$scope.loading = true;
                    $scope.$apply();
                    // $apply的作用就是让指定的表达式重新同步
                });
            //设计暴露的行为
            $scope.go = function(page) {
                // 传过来的是第几页我就跳第几页
                // 一定要做一个合法范围校验
                if (page >= 1 && page <= $scope.totalPages)
                    $route.updateParams({ page: page });
            };
        }
    ])
})(angular);