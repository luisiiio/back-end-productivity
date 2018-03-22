var mongoose = require('mongoose');

module.exports = function (database_name) {
	var connect = function () {
		mongoose.connect('mongodb://127.0.0.1:27017/' + database_name, function(err, res) {
            if(err) {
              console.log('ERROR: connecting to Database. ' + err);
            }else{
                console.log("Connected to Database.");
            }
          });
    };
	connect();
};