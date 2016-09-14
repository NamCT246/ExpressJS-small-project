// this is where the data store
// a better way is to separte the data into 3 files student, teacher and grade
//=> 3 different table in database.

var studentsData = [{
	name: "Nam",
	address: "Kotkantie",
	class: "DIN14",
	id: 1
},
{
	name: "Richard",
	address: "Kotkantie",
	class: "DIN14",
	id: 2
}];

var coursesData = [{
	name: "Mobile Internet Programming",
	description: "Learn to do hybrid app",
	id: 1
}, 
{
	name: "Node Js and ExpressJs",
	description: "Learn to use ExpressJs",
	id: 2
}];
var courseGrade = [{
	courseId : 1,
	studentId: 1,
	name: "Nam",
	class: "DIN14",
	score: 5
},
{
	courseId : 1,
	studentId: 2,
	name: "Richard",
	class: "DIN14",
	score: 1
},
{
	courseId : 2,
	studentId: 2,
	name: "Richard",
	class: "DIN14",
	score: 2
}];

exports.getStudents = function(){
	return studentsData;	
}

exports.getStudentById = function(id){
	return studentsData.filter(function(student, index){ 
		if(student.id == id ){
			return student;	
			}
	})
}

//just remove student
exports.removeStudentById = function(id){
	return studentsData.filter(function(student, index){
		if(student.id==id){
			studentsData.splice(index,1);
		}
	 })
}

//update student through param body
exports.updateInfo = function(id, newInfo){	
	return studentsData.filter(function(student,index){ 
		 if(student.id == id ){
		 	//the condition for empty value doesnt work
		 	//&& studentsData[index].name !== null && studentsData[index].class !== null
		studentsData[index] = newInfo ;
		studentsData[index].id = id; //ensure the id doesnt change
		}
	})
}

//add new student through param body

exports.addNewStudent = function(student){
	studentsData.push(student);
}

//get all score
exports.getScore = function(){
	return courseGrade;
}

//get score by id of course and student
exports.getStudentScore =  function(studentIder, courseIder){
	return courseGrade.filter(function(studentGrade){ 
		//filter: return elements pass the test
		//next line: only return Element that have same courseId and StudentId
		if(studentGrade.studentId == studentIder && studentGrade.courseId == courseIder){
			return studentGrade;			
		}
	})
}
