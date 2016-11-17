/*
 * @Author: XM-web
 * @Date:   2016-11-17 19:50:09
 * @Last Modified by:   XM-web
 * @Last Modified time: 2016-11-17 21:06:28
 */

'use strict';

//豆瓣api不支持 angular提供的异步请求自定义回调函数名称 angular. 格式 

(function(angular) {
    angular.module('moviecat.services.http', [])
        .service('httpService', ['$document', '$window', function($document, $window) {
            this.jsonp = function(url, data, callback) {
                //自定义函数名称
                var callbackName = 'my_jsonp_' + Math.random().toString().replace('.', '');
                //挂载回调函数       
                $window[callbackName] = callback;
                //处理URL地址
                var querystring = url.indexOf('?') == -1 ? '?' : '&';
                for (var key in data) {
                    querystring += key + '=' + data[key] + '&';
                }
                querystring += 'callback=' + callbackName;
                //创建script标签
                var scriptElement = $document[0].createElement('script');
                //将scrpit标签添加到页面上
                scriptElement.src = url + querystring;
                $document[0].body.appendChild(scriptElement);
            };
        }])
})(angular)
