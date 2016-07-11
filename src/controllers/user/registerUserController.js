app.controller('registerUserController', function ($scope, userFactory) {

  $scope.submit = function () {
    var params = new FormData();
      for (var key in $scope.user)
        params.append(key, $scope.user[key]);

    userFactory.register(params).success(function (data) {
      console.log('sdf')
    });
  }
})
