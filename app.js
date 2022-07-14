'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.view6',
  'myApp.view7',
  'myApp.view8',
  'myApp.view9',
  'myApp.view10',
  'myApp.view11',
  'myApp.view12',
  'myApp.view13',
  'myApp.view14',
  'myApp.view15',
  'myApp.view16',
  'myApp.view17',
  'myApp.version',
  "components"
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/view1' });
  }])
  .controller('myCtrl', function ($scope,$rootScope) {
    $rootScope.URL = 'api/'    //定义一个数据
    $rootScope.crumbs = [      //给面包屑初始化，对数组进行增删改查操作，只需要给每一个点击事件进行ng-click的点击事件操作，并且绑定对应的数据
      {
        title:'Windows更新',
        url:'#!/view11',
        right:false,
        zIndex:1
      },
     
    ];
    $rootScope.onJumpPage = function(param, level){
        if(param === 'back'){
          let z = this.crumbs.length
          if(z ===1 )return
          //回调函数返回上一层
          this.onJumpPage({title:this.crumbs[z-2].title,url:this.crumbs[z-2].url.replace('#!/','')},z-1)
          return
        }
        //判断跳转层级是否小于面包屑的长度，如果小于长度，则判断为返回
        if( level < this.crumbs.length ){
          //如果判断为返回上一层，则去掉面包屑数组去掉多余层级
          this.crumbs.splice(level,this.crumbs.length)    //这里只改变数组的内容
        }
        this.crumbs[level - 1] = {    //将面包屑改为目前对应层的数据
          title:param.title,
          url:"#!/" + param.url,
          right: level !==1,    //判断是否有右箭头
          zIndex: level   //记录层数
        };
        window.location.href = window.location.origin + '#!/' + param.url   //origin返回域名
        console.log(this.crumbs)
    }

    //  $rootScope.onJump=function(param,level){
    //   onJump({title:'游戏',url:'view8',right:false},1)
    //    this.list[level-1]=param
    //   }

    // $rootScope.list=[{title:'系统',url:'',right:false}]
    // $rootscope.item = "Windows"
    // $rootscope.add = function(event){
    //   let e = event.target.innerHTML;
    //   console.log(e)
    //   $scope.item = e;
    //   console.log($scope.item)
    // }
    // $rootScope.onJumPage = function(param,level){

    // }
    $scope.menuList = [
      { href: "view1", name: "系統",class: "iconfont icon-xitong box" },
      { href: "view2", name: "蓝牙和其他设备",class: "iconfont icon-lanya box" },
      { href: "view3", name: "网络和Internet",class: "iconfont icon-wuxianwangluo box" },
      { href: "view4", name: "个性化",class: "iconfont icon-shouye box" },
      { href: "view5", name: "应用",class: "iconfont icon-yingyong box" },
      { href: "view6", name: "账户",class: "iconfont icon-zhanghu box" },
      { href: "view7", name: "时间和语言",class: "iconfont icon-shijian box" },
      { href: "view8", name: "游戏",class: "iconfont icon-youxi box" },
      { href: "view9", name: "辅助功能",class: "iconfont icon-fuzhushezhi box" },
      { href: "view10", name: "隱私和安全性",class: "iconfont icon-anquan box" },
      { href: "view11", name: "Windows更新",class: "iconfont icon-gengxin box" }
    ],
    $scope.item = 'Windows'
    $scope.add = function(event){
        let e = event.target.innerHTML;
        console.log(e)
        $scope.item = e;
        console.log($scope.item)
    }
    $scope.back = function(){
         history.back();
    }
    // $rootScope.crumbs = [
    //   {
    //     title:"",
    //     url:"",
    //     right:flase
    //   },
    //   1
    // ],
    // $scope.jump 
  });


