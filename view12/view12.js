'use strict';

angular.module('myApp.view12', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view12', {
      templateUrl: 'view12/view12.html',
      controller: 'View12Ctrl'
    });
  }])

  .controller('View12Ctrl', function ($scope, $http) { 
    // $scope.areaList = [
    //   {index:'区域格式',value:'中文(简体,中国)'},
    //   {index:'日历',value:'公历'},
    //   {index:'一周的第一天',value:'星期一'},
    //   {index:'短日期',value:'2022/7/11'},
    //   {index:'长日期',value:'2022年7月11日'},
    //   {index:'短时间',value:'9:57'},
    //   {index:'长时间',value:'9:57:29'}
    // ],

    // $scope.x = [
    //   $scope.x = {
    //     title:'语言与区域1',
    //     url: 'view14',
    //     zIndex: 3
    //   }
    // ]
    
    $scope.timeZoneList = [];
    $scope.calendarList = [];
    $scope.timeZone = ''
    $scope.calendar = ''
    $scope.getTimeZone = function () {   //http获取时间
      if(this.timeZoneList.length>=1) return
      $http({    
        method: 'GET',
        url: 'http://127.0.0.1:5501/api/zone.json'
      }).then((res) => {
        this.timeZoneList = res.data;
      })
    }
    $scope.getCalendar = function () {   //http获取日历
      if(this.calendarList.length>=1) return
      $http({    
        method: 'GET',
        url: 'http://127.0.0.1:5501/api/calendar.json'
      }).then((res) => {
        this.calendarList = res.data;
        console.log(res.data)
      })
    }
    $scope.switch0 = false
    $scope.switch1 = false
    $scope.switch2 = false

    $scope.item1 = false
    $scope.item2 = false
    $scope.item3 = false
    $scope.change1 = function () {
      $scope.item1 = !$scope.item1
    }
    $scope.change2 = function () {
      $scope.item2 = !$scope.item2
    }
    $scope.change3 = function () {
      $scope.item3 = !$scope.item3
    }
  });