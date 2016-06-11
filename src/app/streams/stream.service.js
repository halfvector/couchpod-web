export class StreamApiService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.apiHost = 'http://localhost:5000/api';
  }

  getStreamsList() {
    return this.$http.get(this.apiHost + '/streams')
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        this.$log.error('StreamsApiService::getContributors(); Failed.\n' + angular.toJson(error.data, true));
      });
  }
}
