/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { StreamListController } from './streams/stream.list.controller';
import { StreamDetailsController } from './streams/stream.details.controller';
import { StreamApiService } from '../app/streams/stream.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('couchpodWeb', [
    'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngResource', 'ui.router', 'ngMaterial', 'toastr'
  ])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('StreamApiService', StreamApiService)
  .controller('MainController', MainController)
  .controller('StreamListController', StreamListController)
  .controller('StreamDetailsController', StreamDetailsController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
