var models = require('./models');


// View for list all task
var listTask = function(req, res){
    models.task.find().exec(function(error, tasks) {
        if(error) res.status(500).json(error);
        else res.status(200).json(tasks);
    });
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


// View for delete one task
var deleteTask = function(req, res){
    console.log(req.body);
    var _id = req.body._id;
    
    models.task.remove({_id: _id}).exec(function(error, tasks) {
        if(error) res.status(500).json(error);
        else res.status(200).json(tasks);
    });;

};



// Export all views for task route
module.exports = {
    listTask:listTask,
    createTask:createTask,
    updateTask:updateTask,
    deleteTask:deleteTask
};