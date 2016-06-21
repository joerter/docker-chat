var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var greeting = require('./greeting');
var storage = require('./storage');
var process = require('process');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.emit('greeting', greeting());
  storage.allMessages(function (messages) {
    messages.forEach(function (msg) {
      socket.emit('chat message', msg.message);
    });
    socket.emit('greeting', 'That\'s it!');
  });

  socket.on('chat message', function(msg){
    storage.saveMessage(msg);
    io.emit('chat message', msg);
  });
});

var port = process.env.PORT || 3000;
http.listen(port, function(){
  console.log('listening on *:' + port);
});
