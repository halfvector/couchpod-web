export class RegistrationController {
  constructor($log, $state, $resource) {
    'ngInject';

    var userApi = $resource('http://localhost:5000/users/:id', {id: '@id'});

    this.user = {
      fullName: "",
      email: "",
      password: ""
    };

    this.serverErrors = {};

    this.submit = function () {
      $log.debug("user", this.user);

      userApi.save(this.user)
        .$promise
        .then(() =>
          // user registered and initial login session created. go to dashboard.
          $state.go('home')
        )
        .catch(err => {
          this.serverErrors[err.status] = err.statusText;
        });
    }
  }
}
