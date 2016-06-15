export default class AuthService {
  constructor($log) {
    'ngInject';

    this.user = null;
    this.$log = $log;
  }

  setUser(user) {
    this.user = user;
    this.$log.debug("Current user", user);
  }

  isLoggedIn() {
    return this.user != null;
  }
}
