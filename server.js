var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {
  var len_clients = io.sockets.clients('test').length;
  if (len_clients < 2) {
    socket.join('test');
    len_clients += 1;
  }
  console.log('number clients: ' + len_clients + '\n');  
  if ( len_clients === 2 ) {
    console.log('sending start signal');
    var count = 0;
    io.sockets.in('test').emit('go');
  }
  socket.on('sendDataToServer', function (data) {
    console.log('data received\n');
    count += 1;
    console.log('number data received: ' + count + '\n');
    socket.broadcast.in('test').emit('returnDataToClient',data);
  });
});
