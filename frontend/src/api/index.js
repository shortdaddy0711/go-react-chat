var socket = new WebSocket(`ws://${window.location.hostname}:8080/ws`);

let connect = (cb) => {
	socket.onopen = () => {
		console.log('connected');
	};

	socket.onmessage = (msg) => {
		console.log(msg);
		cb(msg);
	};

	socket.onclose = (event) => {
		console.log('Connection closed: ', event);
	};

	socket.onerror = (err) => {
		console.log('Socket error: ', err);
	};
};

let sendMsg = (msg) => {
	console.log('Message: ', msg);
	socket.send(msg);
};

export { connect, sendMsg };
