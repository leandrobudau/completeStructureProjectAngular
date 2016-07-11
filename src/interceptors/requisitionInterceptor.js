app.factory('requisitionInterceptor', function ($q, $location, $urlRouter, statusCodeHttpFactory) {
  return {
    responseError: function (rejection) {
      statusCodeHttpFactory.setCode(rejection.status)
      statusCodeHttpFactory.setMessage(rejection.statusText)
      $location.path(rejection.status + 'html')
      return $q.reject(rejection)
    }

  }
})
