var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {
  socket.join('test');
  var clients = io.sockets.clients('test');
  if ( clients.length === 2 ) {
    io.sockets.in('test').emit('go');
  }
});
