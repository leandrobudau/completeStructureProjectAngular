app.factory('userFactory', function ($http, $resource) {
  var login = function (params) {
    return $http.post('http://localhost:8000/login', params)
  }
  var logout = function () {
    return $http.post('http://localhost:8000/logout')
  }

  var user = function () {
    return $resource('http://localhost:8000/user/:id', {id: '@id'},{ update: {method: 'PUT'}});
  }

  var register = function (params) {
    return $http.post('http://localhost:8000/user', params, {
      transformRequest: angular.identity,
      headers: { 'Content-Type': undefined }
    })
  }

  return {
    login: login,
    logout: logout,
    user: user,
    register: register
  }
})
