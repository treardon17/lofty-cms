const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const graphql = require('graphql').graphql;
const graphQLHTTP = require('express-graphql');
const ModuleSettingSchema = require('./src/schema/module_settings.js');

// Create an express app
const app = express();

// const query = 'query { quotes { id, name, quote }}';
// // const query = 'mutation { add(name: "santa", quote: "ho ho ho") {id, name, quote}  }';
// // const query = 'mutation { add(name: "willy wonka", quote: "I like chocolate") {id, name, quote}  }';
// graphql(Schema, query).then((result) => {
//   console.log(JSON.stringify(result, null, ' '));
// });

// const query = 'moduleSettingOne(filter: {name: "test-module"}) { name, fields }';
const query = 'mutation { moduleSettingCreate(record: {name: "test-module", fields: {a: 1, b: 2, c: [1, 2, 3, true, false, {sub: 1}]}}) { recordId, record { name, fields } } }';
graphql(ModuleSettingSchema, query).then((result) => {
  console.log(JSON.stringify(result, null, ' '));
});

app
  .use('/', graphQLHTTP({schema: ModuleSettingSchema, pretty: true}))
  .listen(8080, (err) => {
    console.log('GraphQL Server is now running on localhost:8080');
  })