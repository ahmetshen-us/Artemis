const { RESTDataSource } = require('apollo-datasource-rest');

class ActivityAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://www.boredapi.com/api/activity';
  }
}

module.exports = ActivityAPI;