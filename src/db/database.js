const mongoose = require('mongoose');
const graphql = require('graphql');

class Database {
  constructor () {
    // Setup database connection
    this.uri = 'mongodb://localhost:27017';
    mongoose.Promise = global.Promise;
    mongoose.connect(this.uri, {
      keepAlive: true,
      reconnectTries: Number.MAX_VALUE,
      useMongoClient: true
    });

    this.db = mongoose.connection;
    this.db.on('error', console.error.bind(console, 'connection error:'));
  }
}

module.exports = new Database();