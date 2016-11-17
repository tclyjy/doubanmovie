/*
 * @Author: XM-web
 * @Date:   2016-11-17 16:36:15
 * @Last Modified by:   XM-web
 * @Last Modified time: 2016-11-17 21:00:49
 */

(function(angular) {
    'use strict';
    var module = angular.module('moviecat.in_theaters', ['ngRoute', 'moviecat.services.http']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters', {
            templateUrl: 'components/in_theaters/view.html',
            controller: 'inTheatersController'
        });
    }]);

    module.controller('inTheatersController', ['$scope', 'httpService','$routeParams',
        function($scope, httpService,$routeParams) {

            //设计暴露的数据
            $scope.subjects = [];
           
            var page = parseInt($routeParams.page);
             $scope.currentPage = page;
            //测试$http服务
            httpService.jsonp('https://api.douban.com/v2/movie/in_theaters',{ start: 0, count: 10 }, function(data) {
                $scope.title = data.title;
                $scope.subjects = data.subjects;
                $scope.totalCount = data.total;
                $scope.totalPages = Math.ceil(data.total / 10);
                $scope.loading = false;
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
})(angular)
