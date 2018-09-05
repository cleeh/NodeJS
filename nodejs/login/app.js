var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParse.urlencoded({ extended: true })); // for parsing
application/x-www-form-urlencoded


app.get('/', function(req, res){
	res.send('Hello World!');
});

app.get('/login', function(req, res){
//	var html = '<input type="text" name="id" placeholder="id"><br>';
//	html += '<input type="password" name="pw" placeholder="password"><br>';
//	res.send(html);	
	res.sendFile(__dirname + '/login.html');
});

app.post('/login', function(req, res){
//	var id = req.param('id');
	var id = req.body.id;
	var pw = req.body.pw;
	var result = login(id, pw);
//	res.send(id);
	res.send(result);
});

function login(id, pw){
	return 'user' === id && 'pass' == pw;
}

app.listen(3000, function(){
	console.log('server started!');
});