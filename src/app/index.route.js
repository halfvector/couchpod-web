export default function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      parent: 'app',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })
    .state('registration', {
      url: '/registration',
      parent: 'app',
      templateUrl: 'app/registration/registration.html',
      controller: 'RegistrationController',
      controllerAs: 'vm'
    })
    .state('streams', {
      url: '/streams',
      parent: 'app',
      abstract: true,
      template: '<ui-view/>'
    })
    .state('streams.list', {
      url: '',
      templateUrl: 'app/streams/stream.list.html',
      controller: 'StreamListController',
      controllerAs: 'vm'
    })
    .state('streams.details', {
      url: '/:id',
      templateUrl: 'app/streams/stream.details.html',
      controller: 'StreamDetailsController',
      controllerAs: 'vm'
    })
  ;

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
}
