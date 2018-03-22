var mongoose = require('mongoose');

module.exports = function (database_name) {
	var connect = function () {
		mongoose.connect('mongodb://127.0.0.1:27017/' + database_name);
    };
    
	connect();

	mongoose.connection.on('error', console.log);
	mongoose.connection.on('disconnected', connect);
};