app.controller('errorHttpRequestController', function ($scope, statusCodeHttpFactory) {
  $scope.code = statusCodeHttpFactory.getCode()
  $scope.message = statusCodeHttpFactory.getMessage()
  $scope.classIcon = statusCodeHttpFactory.getClassIcon()
})
