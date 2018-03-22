var models = require('./models');


var listTask = function(req, res){
   
};


// View for create new task
var createTask = function(req, res){
    var description = req.body.description;
    var duration = req.body.duration;

    if(description && duration){
        var objTask =  new models.task({
            description : description,
            duration : duration,
            timer : duration
        });

        objTask.save(function(error, docs){
            if(error) res.status(500).json(error);
            else res.status(201).json({"estatus": "ok"});
        });
    }
    else res.status(400).json({"message": "incomplete parameters"});
};

var updateTask = function(req, res){
    
};

var deleteTask = function(req, res){
    
};



// Export all views for task route
module.exports = {
    listTask:listTask,
    createTask:createTask,
    updateTask:updateTask,
    deleteTask:deleteTask
};