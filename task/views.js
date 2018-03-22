var models = require('./models');


// View for list all task
var listTask = function(req, res){
    models.task.find().exec(function(error, docs) {
        if(error) res.status(500).json(error);
        else res.status(200).json(docs);
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


// View for update onde task
var updateTask = function(req, res){
    var _id = req.body._id;
    var description = req.body.description;
    var duration = req.body.duration;
    if(_id) {
        if(duration && description){
            var obj = {
                description: description,
                duration: duration,
                timer: duration,
            }
            execQuery(obj);
        }else if(duration) {
            var obj = {
                duration: duration,
                timer: duration,
            }
            execQuery(obj);
        }else {
            var obj = {
                description: description,
            }
            execQuery(obj);
        }

    }
    else res.status(400).json({"message": "incomplete parameters"});

    function execQuery(data) {
        models.task.update({_id: _id},{$set:data})
        .exec(function(error, docs) {
            if(error) res.status(500).json(error);
            else res.status(200).json({"estatus": "ok"});
        });;
    }

};


// View for delete one task
var deleteTask = function(req, res){
    var _id = req.body._id;
    
    models.task.remove({_id: _id}).exec(function(error, docs) {
        if(error) res.status(500).json(error);
        else res.status(200).json({"estatus": "ok"});
    });;

};



// Export all views for task route
module.exports = {
    listTask:listTask,
    createTask:createTask,
    updateTask:updateTask,
    deleteTask:deleteTask
};