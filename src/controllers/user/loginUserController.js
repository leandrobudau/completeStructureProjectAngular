app.controller('loginUserController', function ($scope, $http, userFactory, $state) {
  $scope.login = function () {
    userFactory.login($scope.topo).success(function (data) {
      localStorage.setItem('token', data.token);
      $http.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
      console.log(data, $http.defaults.headers.common['Authorization']); 
      $state.transitionTo('home');
    })
  }
})
