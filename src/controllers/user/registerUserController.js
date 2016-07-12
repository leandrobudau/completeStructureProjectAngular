app.controller('registerUserController', function ($scope, userFactory) {

  $scope.submit = function () {
    var params = new FormData();
      for (var key in $scope.user)
        params.append(key, $scope.user[key]);

    userFactory.register(params).success(function (err, data) {
      console.log(err);

    });

    // userFactory.user().save({user: $scope.user}, function (err, data) {
    //   debugger;
    // });



  }
})
