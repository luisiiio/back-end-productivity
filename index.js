var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var database = require('./databases');

database.mongodb("productividad");


INSTALL_APP = [
	{prefix: 'task', app: 'task'},
];

INSTALL_APP.forEach(function(elem, index){
	var app_pro = require('./'+ elem.app +'/urls');
	prefix = elem.prefix;
	app.use('/'+ prefix, app_pro);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(3000, function () {
  console.log('App listening on port 3000!');
});