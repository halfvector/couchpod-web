export class RegistrationApiService {
  constructor ($resource) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.apiHost = 'http://localhost:5000/api';
  }

  register(user) {
    return this.$http.post(this.apiHost + '/users')
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        this.$log.error('StreamsApiService::getContributors(); Failed.\n' + angular.toJson(error.data, true));
      });
  }
}
