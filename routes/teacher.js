var data = require('../src/data');
var express = require('express');
var router = express.Router();

function getStudents(req, res, next){
	res.json(data.getStudents());
};
function addStudent(req, res, next){
	res.json(data.addNewStudent(req.body));
}

function getScoreById(req, res, next){
	res.json(data.getStudentScore(req.params.studentIder, req.params.courseIder))
}

function getScore(req, res, next){
	res.json(data.getScore());
}

router.route("/teacher/:studentIder/:courseIder/score")
	.get(getScoreById)

router.route("/teacher/score")
	.get(getScore)

router.route('/teacher/students')
	.get(getStudents)
	.post(addStudent)
	
router.route('/teacher/students/:id')
	.get(function(req, res){
		res.json(data.getStudentById(req.params.id));
		})
	.delete(function(req, res){
		data.removeStudentById(data.getStudentById(req.params.id));
		res.send("This student is not in this course anymore") ;
		})
	.put(function(req, res){
		data.updateInfo(req.params.id, req.body);
		res.send("updated");
		})

	
module.exports = router;