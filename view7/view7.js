'use strict';

angular.module('myApp.view7', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view7', {
    templateUrl: 'view7/view7.html',
    controller: 'View7Ctrl'
  });
}])

.controller('View7Ctrl', function($scope) {
    $scope.firstList = [
      {class:"iconfont icon-riqi box",p1:"日期和时间",p2:"时区、自动时钟设置、日历显示",href:"view12",title:'日期和时间',url:'view12',zIndex:2},
      {class:"iconfont icon-yuyan box",p1:"语言和区域",p2:"根据你所在的区域设置Windows和某些应用的日期和时间格式",href:"view14",title:'语言和区域',url:'view14',zIndex:2},
      {class:"iconfont icon-shurufa box",p1:"输入",p2:"触摸键盘、文本定义、首选项",href:"view15",title:'输入',url:'view15',zIndex:2},
      {class:"iconfont icon-shengboyuyinxiaoxi box",p1:"语音",p2:"语音语言、语音识别麦克风设置、声音",href:"view16",title:'语音',url:'view16',zIndex:2}
    ]
});