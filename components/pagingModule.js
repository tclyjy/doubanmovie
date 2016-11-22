/*
* @Author: XM-web
* @Date:   2016-11-21 19:42:37
* @Last Modified by:   XM-web
* @Last Modified time: 2016-11-22 16:22:28
*/

'use strict';
(function(angular){
	angular.module('pagingModule', [])
		.directive('ngPaging',function(){
			return{
				restrict: 'EA',
				template:'<nav>'+
				'<ul class="pagination">'+
				' <li ng-class="{disabled:currentPage<=1}"><a class="page" ng-click="go(currentPage - 1)">&laquo;上一页</a></li>'+
				'<li ng-repeat="num in repeatPages track by $index" ng-click="go(num)" ng-class="{active:currentPage==num}"><a class="page">{{num}} <span class="sr-only">(current)</span></a></li>'+
				'<li ng-class="{disabled:currentPage>=totalPages}"><a class="page" ng-click="go(currentPage + 1)">下一页&raquo;</a></li>'+
				'</ul>'+
				'</nav>',
				replace: true,
				link: function($scope, iElm, iAttrs, controller){
					console.log($scope);
					console.log(iElm);
					console.log(iAttrs);
					// 默认分页长度
           		 	var defaultPagesLength = 9;

            		// 默认每页的个数
            		var defaultPerPage = 10;

            		/*window.scope = $scope;
            		while($scope.$last===false){
            			console.log($scope.totalPages);
            		}
            		
            		setTimeout(function(){
            			console.log($scope.totalPages);
            		},3000);
            		*/
				}
			}
		})
	
})(angular);

