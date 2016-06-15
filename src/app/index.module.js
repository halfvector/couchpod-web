/* global malarkey:false, moment:false */

import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';
import MainController from './main/main.controller';
import StreamListController from './streams/stream.list.controller';
import StreamDetailsController from './streams/stream.details.controller';
import StreamApiService from '../app/streams/stream.service';
import RegistrationController from '../app/registration/registration.controller'
import LoginController from '../app/login/login.controller'
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import AuthService from '../app/auth.service'

angular.module('couchpodWeb', [
    'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngResource', 'ui.router', 'ngMaterial', 'toastr'
  ])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .config(($stateProvider) => {

    function throwIfUnauthenticated(response) {
      if (response.status != 200) {
        throw new Error(response.statusText);
      }

      return response.json();
    }

    /**
     * Ask for current user. If 401, redirect to login page.
     */
    function bootstrapSession($resource, $state, AuthService) {
      fetch('http://localhost:5000/users/tokens', {credentials: 'include'})
        .then(throwIfUnauthenticated)
        .then(user => AuthService.setUser(user))
        .catch(err => {
          console.error("Failed to get current user", err);
          $state.go('login');
        })
      ;
    }

    // root level resolve to ensure current user's session is available
    // before anyone that depends on it is executed
    // this prevents controllers from starting before a valid user/session is loaded
    // removes FOUC and authorization race-conditions
    $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        resolve: {
          __bootstrapSession: bootstrapSession
        },
        views: {
          '': {
            template: '<ui-view/>'
          }
        }
      });
  })
  .run(runBlock)
  .service('StreamApiService', StreamApiService)
  .service('AuthService', AuthService)
  .controller('MainController', MainController)
  .controller('StreamListController', StreamListController)
  .controller('StreamDetailsController', StreamDetailsController)
  .controller('RegistrationController', RegistrationController)
  .controller('LoginController', LoginController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
