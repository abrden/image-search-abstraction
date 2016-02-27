'use strict';

var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/img-search',
    routes = require('./app/routes/index.js'),
    search = require('./app/image-search.js'),
    latest = require('./app/latest.js'),
    port = process.env.PORT || 8080;

var History = mongoose.model('History', new Schema({
  term: String,
  when: String
}));

mongoose.connect(mongoUri);
  
routes(app);
search(app, History);
latest(app, History);
  
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});