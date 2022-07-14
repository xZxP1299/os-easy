'use strict';

angular.module('myApp.view11', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view11', {
    templateUrl: 'view11/view11.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
     $scope.selectList = ["一天","一小时","五小时" ]
});






function getDate () {
  var date = new Date();
  var minutes = date.getMinutes();
  minutes = minutes < 10 ? '0'+minutes : minutes;

  return date.getHours() + ':' + minutes;
}

var preDate = getDate();

function checkUpdate () {
  const timeEl = document.getElementById('time');

  timeEl.innerHTML = preDate;

  preDate = getDate();

  console.log("更新时间了！")
}

setTimeout(() => {
  checkUpdate()
}, 100)
