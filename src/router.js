app.config(function ($stateProvider, $urlRouterProvider) {   
  $urlRouterProvider.otherwise('/404');

  $stateProvider
   .state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    })
    .state('404', {
      url: '/404',
      templateUrl: 'views/error.html',
      controller: 'errorHttpRequestController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/user/register.html',
      controller: 'registerUserController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/user/login.html',
      controller: 'loginUserController'
    })
    .state('logout', {
      url: '/logout',
      templateUrl: 'views/user/logout'
    })
    .state('404.405.406.407.408', {
      url: '/408',
      templateUrl: 'views/408.html'
    });
});