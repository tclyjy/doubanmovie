/*
 * @Author: XM-web
 * @Date:   2016-11-17 16:36:15
 * @Last Modified by:   XM-web
 * @Last Modified time: 2016-11-18 10:03:20
 */

(function(angular) {
    'use strict';
    var module = angular.module('moviecat.in_theaters', ['ngRoute', 'moviecat.services.http']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters/:page', {
            templateUrl: 'components/in_theaters/view.html',
            controller: 'inTheatersController'
        });
    }]);
    //分页功能完成：在路由的配置中加上分页参数； 在控制器中提取参数，$routeParams
    module.controller('inTheatersController', ['$scope','$routeParams','$route','httpService',
        function($scope,$routeParams,$route,httpService) {

            //设计暴露的数据
            $scope.subjects = [];
           
            var page = parseInt($routeParams.page);
             $scope.currentPage = page;
             //分页数据
             var countNum = 10;
             var startNum = (page-1)*countNum;
            //测试$http服务
            httpService.jsonp('https://api.douban.com/v2/movie/in_theaters',{ start: startNum, count: countNum }, function(data) {
                $scope.title = data.title;
                $scope.subjects = data.subjects;
                $scope.totalCount = data.total;
                $scope.totalPages = Math.ceil(data.total / countNum);
                console.log($scope.totalPages);
                $scope.repeatPages =[];
                for(var i=0;i<$scope.totalPages;i++){
                	$scope.repeatPages[i]=i+1;
                }
                $scope.loading = true;
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
