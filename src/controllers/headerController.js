app.controller('headerController', function ($scope, $http) {

})
app.controller('colaboradorCtrl', function ($rootScope, $scope) {
    var route = "colaborador";
    $rootScope.$on('colaborador', function (_, data) {
        $scope.visualizationIndex = data.value;
    });
    $scope.visualizationIndex = 0;
    $scope.changeVisualization = function () {
        if ($scope.visualizationIndex < 2)
            $scope.visualizationIndex += 1
        else
            $scope.visualizationIndex = 0;
    }
});
app.controller('colaboradorListaCtrl', function ($rootScope, $scope) {
    $rootScope.$on("colaborador.lista", function (_, data) {
        $scope.visualizationIndex = data.value;
    });
    $scope.visualizationIndex = 0;
    $scope.changeVisualization = function () {
        if ($scope.visualizationIndex < 2)
            $scope.visualizationIndex += 1
        else
            $scope.visualizationIndex = 0;
    }
});
app.controller('colaboradorListaDetailCtrl', function ($rootScope, $scope) {
    $rootScope.$on("colaborador.lista.details", function (_, data) {
        $scope.visualizationIndex = data.value;
    });
    $scope.visualizationIndex = 0;
    $scope.changeVisualization = function () {
        if ($scope.visualizationIndex < 2)
            $scope.visualizationIndex += 1
        else
            $scope.visualizationIndex = 0;
    }
});
 