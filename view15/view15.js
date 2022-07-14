'use strict';

angular.module('myApp.view15', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view15', {
    templateUrl: 'view15/view15.html',
    controller: 'View15Ctrl'
  });
}])

.controller('View15Ctrl', function($scope) {
   $scope.item1 = true
   $scope.inputchange = false
   $scope.inputList = [
    {value:'在我输入内容时播放按键音',class:''},
    {value:'每句话的首字母大写',class:''},
    {value:'显示语音输入麦克风按钮',class:'iconfont '},
    {value:'未连接 键盘时显示触摸键盘',class:''}
   ]
    // $scope.shuruList = [
    //   {class:"iconfont icon-shurufa box",p1:"在物理键盘上键入时显示文本建议",p2:"在某些语言中无法使用"},
    //   {class:"iconfont icon-yuyan box",p1:"多语言文本建议",p2:"根据我的语言首选项显示文本建议"}
    // ],
    $scope.shuruList1 = [
      {class:"iconfont icon-zuixingengxin box",p1:"键入见解",p2:"查看键入和更正历史记录",href:"#!/view16",title:'键入见解',url:'view16',zIndex:3},
      {class:"iconfont icon-shezhi box",p1:"高级键盘设置",p2:""}
    ],
    $scope.shuruList2 = [
      {class:"iconfont icon-yuyan box",p1:"语言和区域",p2:"语言包、区域格式"},
      {class:"iconfont icon-fuzhushezhi box",p1:"墨迹书写和键入个性化",p2:"个人字典"},
      {class:"iconfont icon-zuojiantou box",p1:"文本光标",p2:"颜色、大小、粗细"}
    ]
    $scope.change1 = function(){
      $scope.item1 = !$scope.item
    }
     
    $scope.switch = false
    $scope.switch1 = false
    $scope.inputChange = function(){
       $scope.inputchange = !$scope.inputchange
       console.log($scope.inputchange)
    }
});