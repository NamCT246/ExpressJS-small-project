var express = require('express');
var bodyParser = require('body-parser');
var students = require('./routes/Students.js');
var teacher =  require('./routes/teacher.js');
var app = express();
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 80));

app.use('/', students);
app.use('/', teacher);

app.get('/', function(req, res){
	res.send("hello world");
});

app.listen(app.get('port'), function() {

console.log('Node app is running on port', app.get('port'));

}); 