angular.module('components', [])
    .component("switch", {
        templateUrl: "components/switch.html",
        transclude: true,
        bindings: {
            opened: "=",
            disabled: "="
        },
        controller: function ($scope) {
            $scope.clickSwitch = () => {
                if (this.disabled) return
                this.opened = !this.opened
            }
        }
    })
    .component("dropdown", {
        templateUrl: 'components/dropdown.html',
        bindings: {
            source: "@",
            default: "@"
        },
        controller: function ($http) {
            const fetchData = () => {
                $http.get(this.source).then(data => {
                    this.data = data.data;
                },
                    err => this.err = err);
            };
            this.$onInit = fetchData;
        }
    })
    .component("switch1", {
        templateUrl: "./components/switch1.html",
        require: {
            x: 'ngModel'
        },
        controller: function Switch($scope) {
            //生命周期函數  组件加载完成时调用
            this.$onInit = function () {
                //調用ngModel模塊，render是数据渲染方法，传值过程中触发
                this.x.$render = function () {
                    //this  指向 ngModel    $modelValue = ng-model的值
                    $scope.switch = this.$modelValue
                }
            }
            console.log('true')
            $scope.send2parent = (value) => {
                //$setViewValue方法將值传回$modelValue   也就是ng-model綁定的值
                this.x.$setViewValue(value)
            }
        },
    })