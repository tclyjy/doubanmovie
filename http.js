/*
 * @Author: XM-web
 * @Date:   2016-11-17 19:50:09
 * @Last Modified by:   XM-web
 * @Last Modified time: 2016-11-22 14:06:55
 */

'use strict';

//豆瓣api不支持 angular提供的异步请求自定义回调函数名称 angular. 格式 

(function(angular) {
    angular.module('moviecat.services.http', [])
        .service('httpService', ['$window', '$document', function($window, $document) {
            //数据URL格式：地址/分页 +?+ start=number +&+ count=number +&+ callback=*
            //https://api.douban.com/v2/movie/in_theaters?start=0&count=10&callback=my_jsonp_randomNumber
            this.jsonp = function(url, data, callback) {
                if(typeof data == 'function'){
                    callback = data;
                }
                //自定义callback函数名称
                var callbackName = 'my_jsonp_' + Math.random().toString().replace('.', '');
                //挂载回调函数
                //$window[function]相当于声明一个全局函数,挂载api请求的callback函数
                $window[callbackName] = function(data){
                    callback(data);
                    $document[0].body.removeChild(scriptElement);
                }
                //处理URL地址
                var urlString = url.indexOf('?') == -1 ? '?' : '&';
                for (var key in data) {
                    urlString += key + '=' + data[key] + '&'
                }
                urlString += 'callback=' + callbackName;
                //创建script标签
                var scriptElement = $document[0].createElement('script');

                //将完整的url地址添加到script标签src属性上，并添加到页面上

                scriptElement.src = url + urlString;
                $document[0].body.appendChild(scriptElement);
            }
        }])
})(angular)
