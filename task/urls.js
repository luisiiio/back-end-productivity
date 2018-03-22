var express = require('express');
var views = require('./views');
var router = express.Router();


router.get('/', views.listTask);
router.post('/',views.createTask);
router.put('/',views.updateTask);
router.delete('/',views.deleteTask);

module.exports = router;