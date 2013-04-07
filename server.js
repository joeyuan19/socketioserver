var io = require('socket.io').listen(8080),
    clients = io.sockets.clients();

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'wo' });
  socket.on('my other event', function (data) {
    console.log(clients);
  });
});
