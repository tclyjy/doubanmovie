# 豆瓣电影

#### 本项目依赖（运行时请npm安装第三方库）

```js
	/*依赖的第三方库*/
	"angular": "^1.5.8",
    "angular-route": "^1.5.8",
    "bootstrap": "^3.3.7",
    "scriptjs": "^2.5.8"

$npm install --save
```

# 求助

  项目分页栏本打算采用 自定义"directive"实现，但在link方法中，获取的$scope对象为undefined,需等到异步加载完成以后才能获取到$scope对象。

```js
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

            		console.log($scope.totalPages);  //结果undefined;
            		
            		setTimeout(function(){
            			console.log($scope.totalPages); //延迟输出，等到异步加载完成就可以输出
            		},3000);
				}
			}
		})
	
})(angular);

/*详见（pagingModule.js文件）*/
```
  后面无奈之下只能定义全局构造函数，在controller中通过new方法把$scope作为参数传参进去。

```js
function Pagings(location,current, total, show) {}; 
//在控制器 new Pagings($location.path(),$scope.currentPage,$scope.totalPages,6) 传参数进去

/*构造函数代码（paging.js）*/
```

  哪位大神帮帮忙解决一下 O(∩_∩)O