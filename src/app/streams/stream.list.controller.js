export default class StreamListController {
  constructor($log, StreamApiService, $resource) {
    'ngInject';

    this.newStream = {
      streamName: "",
      isPublic: true
    };

    this.api = $resource('http://localhost:5000/streams/:id', {id: '@id'});
    this.refreshStreamsList();
  }

  refreshStreamsList() {
    this.streams = this.api.query();
  }

  createStream() {
    console.log("creating new stream", this.newStream);

    var dto = {
      streamName: this.newStream.streamName,
      visibility: this.newStream.isPublic ? 1 : 0,
      description: ""
    };

    this.api.save(dto).$promise
      .then(() =>this.refreshStreamsList())
      .catch(err => {
        console.error("Failed to create new stream", err);
      });
  }
}
