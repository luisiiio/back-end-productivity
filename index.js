var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var database = require('./databases');

database.mongodb("productividad");


app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(3000, function () {
  console.log('App listening on port 3000!');
});