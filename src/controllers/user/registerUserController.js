app.controller('registerUserController', function ($scope, userFactory, fileUploadService) {

  $scope.submit = function () {
    debugger;
    fileUploadService.uploadFileToUrl($scope.file, 'http://localhost:8000/upload')
      .success(function (data) {
        if(data.filename)
          $scope.user.photo = data.filename
        

        userFactory.user().save($scope.user, function (err, data) {
          if(err)
            console.error(err);
            else
            console.log(data)
        })
      })
      .error(function () {})
  }
})
