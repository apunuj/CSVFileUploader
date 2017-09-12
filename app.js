var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./config');

mongoose.connect(config.MONGO_URL);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', function(){
  console.log("Connected successfully to the database");
});

var users = require('./routes/csvUserRouter');

app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, '/dist')));

app.use('/users', users);

app.listen(3000, function(){
  console.log("Server started in port 3000")
});
