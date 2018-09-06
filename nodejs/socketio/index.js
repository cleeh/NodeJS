var app = require('express')();
var http = require('http');.Server(app);

app.get('/',, function(req, res){
//	res.send('<h1>Hello World</h1>');
	res.sendFile(__dirname + '/index2.html');
});

io.on('connection', function(socket){
//	console.log('a user connected');
//	socket.on('disconnect', function(){
//		console.log('user disconnected');
//	});

	socket.on('caht message', function(msg){
//		console.log('message: ' + msg);
		io.emit('chat message', msg); // Broadcasting
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});