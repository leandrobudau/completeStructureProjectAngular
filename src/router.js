app.config(function ($stateProvider, $urlRouterProvider) {   
  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('colaborador', {
      url: '/colaborador',
      controller: 'colaboradorCtrl',
      templateUrl: 'views/colaborador.html',
    })
    .state('colaborador.lista', {
      url: '/lista',
      controller: 'colaboradorListaCtrl',
      templateUrl: "views/colaborador-lista.html"
    })
    .state('colaborador.lista.details', {
      url: '/details',
      controller: 'colaboradorListaDetailCtrl',
      templateUrl: "views/colaborador-details.html"
    })
    .state('404', {
      url: '/404',
      templateUrl: 'views/404.html'
    })
    .state('404.405', {
      url: '/405',
      templateUrl: 'views/405.html'
    })
    .state('404.405.406', {
      url: '/406',
      templateUrl: 'views/406.html'
    })
    .state('404.405.406.407', {
      url: '/407',
      templateUrl: 'views/407.html'
    })
    .state('404.405.406.407.408', {
      url: '/408',
      templateUrl: 'views/408.html'
    });
});