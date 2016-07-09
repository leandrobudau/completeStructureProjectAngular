app.controller('headerController', function ($scope) {
    $scope.teste = "Leandro";
    
    $scope.funcao = function () { 
        return 'funcao';  
    }
});

app.controller('upload', function ($scope, $http) {
var fd = new FormData();
        for (var key in $scope.topo)
            fd.append(key, $scope.topo[key]);

        return $http.post('http://localhost:8000/user', fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        });
})
