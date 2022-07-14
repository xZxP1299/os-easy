'use strict';

angular.module('myApp.view13', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view13', {
    templateUrl: 'view13/view13.html',
    controller: 'View13Ctrl'
  });
}])

.controller('View13Ctrl', function($scope) {
    $scope.item1 = true
    $scope.item2 = true
    $scope.item3 = true
    $scope.change1 = function(){
       $scope.item1 = !$scope.item1
    }
    $scope.change2 = function(){
      $scope.item2 = !$scope.item2
    }
    $scope.change3 = function(){
      $scope.item3 = !$scope.item3
    }
});