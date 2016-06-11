export function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('login', {
      url: '/welcome',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })
    //.state('stream', {
    //  url: '/streams',
    //  abstract: true
    //})
    .state('stream_list', {
      url: '/streams',
      templateUrl: 'app/streams/stream.list.html',
      controller: 'StreamListController',
      controllerAs: 'vm'
    })
    .state('stream_details', {
      url: '/streams/:id',
      templateUrl: 'app/streams/stream.details.html',
      controller: 'StreamDetailsController',
      controllerAs: 'vm'
    })
  ;

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
}
