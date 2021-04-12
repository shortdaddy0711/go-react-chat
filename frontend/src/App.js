import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { connect, sendMsg } from './api';

function App() {
	useEffect(() => {
		connect();
	}, []);

	const send = () => {
		console.log('hello');
		sendMsg('hello');
	};

	return (
		<div className='App'>
			<Header />
			<button onClick={send}>Hit</button>
		</div>
	);
}

export default App;
