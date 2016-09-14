//demonstrate how to pass respone from data.js

var data = require('../src/data');
var express = require('express');
var router = express.Router();

function getStudents(req, res, next){
	res.json(data.getStudents());
}

function getStudentById(req, res,next){
	res.json(data.getStudentById(req.params.id));
}

function getScore(req, res, next){
	res.json(data.getScore());
}

router.route('/students')
	.get(getStudents)

function getScoreById(req, res, next){
	res.json(data.getStudentScore(req.params.studentIder, req.params.courseIder))
}

//where student can get their own score. need auth to prevent see other scores
router.route("/students/:studentIder/:courseIder/score")
	.get(getScoreById);

router.route('/students/:id')
	.get(getStudentById)
	//two way implement
	.delete(function(req, res){
		 data.removeStudentById(req.params.id);
		 res.send("This student is not in this course anymore") ;
		 //second way: define function here 
	})
	.put(function(req, res){
		data.updateInfo(req.params.id, req.body);
		res.send("updated");
	})

	
module.exports = router;