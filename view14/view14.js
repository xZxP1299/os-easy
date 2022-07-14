'use strict';

angular.module('myApp.view14', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view14', {
      templateUrl: 'view14/view14.html',
      controller: 'View14Ctrl'
    });
  }])

  .controller('View14Ctrl', function ($scope, $http) {
    $scope.x = {
      title:'输入',
      url: 'view15',
      zIndex: 3
    }

    $scope.chineseChoose = false,
      $scope.areaValue = false,
      $scope.areaList = [
        { index: '区域格式', value: '中文(简体,中国)' },
        { index: '日历', value: '公历' },
        { index: '一周的第一天', value: '星期一' },
        { index: '短日期', value: '2022/7/11' },
        { index: '长日期', value: '2022年7月11日' },
        { index: '短时间', value: '9:57' },
        { index: '长时间', value: '9:57:29' }
      ],
      $scope.chineseList = [
        { class: 'iconfont icon-qita box', chinese: '语言选项' },
        { class: 'iconfont icon-shangyi box', chinese: '上移' },
        { class: 'iconfont icon-xiayi box', chinese: '下移' },
        { class: 'iconfont icon-shanchu box', chinese: '删除' }

      ],
      $scope.yuyanList = [
        { class: "", p1: "国家或地区", p2: "" },
        { class: "", p1: "区域格式", p2: "" }
      ],
      $scope.languageList = [],
      $scope.language = ''
    $scope.getLanguage = function () {   //http获取时间
      if (this.languageList.length >= 1) return
      $http({
        method: 'GET',
        url: 'http://127.0.0.1:5501/api/language.json'
      }).then((res) => {
        this.languageList = res.data;
        console.log(res.data)
      })
    },
      $scope.countryList = [],
      $scope.country = ''
    $scope.getCountry = function () {   //http获取时间
      if (this.countryList.length >= 1) return
      $http({
        method: 'GET',
        url: 'http://127.0.0.1:5501/api/country.json'
      }).then((res) => {
        this.countryList = res.data;
        console.log(res.data)
      })
    },
      $scope.chinese = false
    $scope.btn = function () {
      $scope.chinese = !$scope.chinese
    }
    $scope.chooseChinese = function () {
      $scope.chineseChoose = !$scope.chineseChoose
    }
    $scope.area = function () {
      $scope.areaValue = !$scope.areaValue
      console.log($scope.areaValue)
    }

  });