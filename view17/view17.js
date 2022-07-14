'use strict';

angular.module('myApp.view17', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view17', {    //嵌套路由地址
    templateUrl: 'view17/view17.html',
    controller: 'View17Ctrl'
  });
}])

.controller('View17Ctrl', function($scope) {
  $scope.jianruList = [
    {h:"自动完成的单词",p:"当你开始键入时，我们会提出建议，使你可以快速完成一个单词.",number:"0"},
    {h:"建议的单词",p:"我们甚至会在你开始键入之前猜出你的下一个单词.",number:"0"},
    {h:"省去的击键",p:"通过文本建议和滑过单词，你可以通过避免击键来节省时间.",number:"0"},
    {h:"拼写更正",p:"我们都会出现拼写错误，现在的目标就是确保发现这些错",number:"0"},
    {h:"滑过的单词",p:"你知道可以通过在触摸盘上滑动手指来键入吗？",number:"0"}
  ],
    $scope.item = true;
    $scope.change = function(){
       $scope.item = !$scope.item
    }
});