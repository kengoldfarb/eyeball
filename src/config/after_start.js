// console.log('file included');
// // geddy.sockets = require('socket.io').listen(4002);
// geddy.io.sockets.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });
// console.log(geddy.io);
console.log('after_start START');
geddy.io.configure(function() {
	console.log('SETTING IO!');
	geddy.io.enable('browser client etag');
	geddy.io.set('log level', 1);

	// io.set('transports', ['websocket', 'flashsocket', 'htmlfile', 'xhr-polling', 'jsonp-polling']);
	geddy.io.set('transports', ['flashsocket', 'htmlfile', 'xhr-polling', 'jsonp-polling']);
	console.log('DONE SETTING IO!');
});

geddy.io.sockets.on('connection', function (socket) {
	// console.log(geddy.io.transports[socket.id].name);
	// console.log(geddy.io.transports[socket.id]);
	socket.on('getLatestCommits', function (fn) {
		// console.log(name);
		geddy.model.Commit.all(function(err, commits) {
	        fn(commits);
	      });
	  });
});



console.log('after_start finished');