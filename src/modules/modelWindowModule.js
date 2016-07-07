//module
var modelWindow = angular.module('modelWindow', []);

//Constant
modelWindow.constant('window_size', {
    small: 60,
    medium: 620,
    large: 1020
});

//App.Run
modelWindow.run(function ($rootScope, $templateCache, $timeout) {

    $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams, options) {

            var routes = toState.name.split('.')
                .map(function (d, i, ds) {
                    return ds.slice(0, i + 1).join('.')
                });

            var i = 0;
            while (routes.length > 0) {
                var item = routes.pop();
                $rootScope.$broadcast(item, {
                    value: i > 2 ? 2 : i
                });
                i++;
            }
            $rootScope.$emit('changeWidthWindow');


        });
});

//Controller
modelWindow.controller('modelWindowController', function ($rootScope, $scope, $state) {
    //Privates variables
    var classVisualization = ['model-window--large', 'model-window--medium', 'model-window--small'];
    var defineWindowColor = function () {
        var colorHeader = ['mdl-color--primary-dark', 'mdl-color--primary', 'mdl-color--primary'];
        var textHeader = ['mdl-color-text--accent', 'mdl-color-text--accent', 'mdl-color-text--accent'];
        $scope.windowColorHeader = colorHeader[$scope.visualizationIndex];
        $scope.windowTextHeader = textHeader[$scope.visualizationIndex];
    };

    //Define route change
    $rootScope.$on($scope.rota, function (_, data) {
        $scope.visualizationIndex = data.value;
        $scope.typeView = classVisualization[$scope.visualizationIndex];
        defineWindowColor();
    });

    //Scopes
    $scope.Init = function () {
        $scope.visualizationIndex = 0;
        var routes = $state.current.name.split('.')
            .map(function (d, i, ds) {
                return ds.slice(0, i + 1).join('.')
            });
        var indiceInit = function () {
            var indice = routes.indexOf($scope.rota);
            if (indice == routes.length - 1) return 0;
            if (indice == routes.length - 2) return 1;
            return 2;
        };
        $scope.visualizationIndex = indiceInit();
        $scope.typeView = classVisualization[$scope.visualizationIndex];
        defineWindowColor();
    }
    $scope.changeVisualization = function () {
        var index = $scope.rota.split('.').length - 1;

        if ($scope.visualizationIndex < 2) {
            $scope.visualizationIndex += 1;
        }
        else {
            $scope.visualizationIndex = 0;
        }
        
        $scope.$emit('changeWidthWindow', {
            index: index,
            type: $scope.visualizationIndex == 0 ? 'large' :
            $scope.visualizationIndex == 1 ? 'medium' :
            'small'
        });
        $scope.typeView = classVisualization[$scope.visualizationIndex];
    }
    $scope.closeWindow = $scope.rota.substr(0, $scope.rota.lastIndexOf('.')) || "home";
});

//Directive - Parent
modelWindow.directive('modelWindowContainer', function ($rootScope, $timeout) {
    return {
        restrict: 'AE',
        transclude: true,
        controller: function ($scope, $element, $timeout, $state, window_size) {
            $scope.current = [];

            var extendHeightModelWindow = function () {
                var layoutContent = document.getElementsByClassName('mdl-layout__content')[0];
                var modelWindows = layoutContent.getElementsByClassName('model-window');

                var layoutContentHeight = layoutContent.clientHeight - 40;

                for (var i = 0; i < modelWindows.length; i++) {
                    modelWindows[i].setAttribute('style', 'height: ' + layoutContentHeight + 'px');
                }
            };

            $scope.$on('changeWidthWindow', function (_, data) {
                extendHeightModelWindow();

                if (data)
                    $scope.current[data.index].type = data.type;
                else
                    $scope.current = $state.current.name.split('.').map(function (d, i, ds) {
                        return { route: d, type: (i == ds.length - 1 ? 'large' : i == ds.length - 2 ? 'medium' : 'small') }
                    });

                var value = 0;
                $scope.current.forEach(function (d) {
                    value += window_size[d.type];
                })

                $element[0].setAttribute('style', 'width: ' + value + 'px');
            });
        },
        link: function (scope, element, attrs, ctrl) {

        }
    }
});

//Directive - Child
modelWindow.directive('modelWindow', function ($rootScope) {
    return {
        templateUrl: 'templates/model-window.html',
        restrict: 'AE',
        transclude: true,
        controller: 'modelWindowController',
        require: '^modelWindowContainer',
        replace: true,
        scope: {
            title: '@title',
            rota: '@rota'
        },
        link: function (scope, element, attrs, container) {
            scope.$emit('changeWidthWindow');
            componentHandler.upgradeAllRegistered();

        }
    }
}); 