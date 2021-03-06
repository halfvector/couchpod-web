export default class LoginController {
  constructor($log, $state, $resource) {
    'ngInject';

    var userApi = $resource('http://localhost:5000/users/tokens');

    this.user = {
      email: "",
      password: ""
    };

    this.serverErrors = {};

    this.submit = function () {
      $log.debug("login user", this.user);

      userApi.save(this.user)
        .$promise
      //fetch('http://localhost:5000/users/tokens', {
      //  method: 'POST',
      //  credentials: 'include',
      //  headers: {
      //    'Accept': 'application/json',
      //    'Content-Type': 'application/json'
      //  },
      //  body: JSON.stringify(this.user)
      //})
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
