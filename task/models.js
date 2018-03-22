var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Task = mongoose.Schema({
    description : { type : String },
    duration : { type : String },
    timer : { type : String },
    completed : { type : Boolean },
    date_init: { type: Date },
    date_end: { type: Date }
});

var task = mongoose.model('task', Task);

module.exports = {
    task : task
}