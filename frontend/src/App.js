import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import { connect, sendMsg } from './api';

function App() {
	const [chatHistory, setChatHistory] = useState([]);

	useEffect(() => {
		connect((msg) => {
			console.log('New Message');
			setChatHistory((prevState) => {
				return [...chatHistory, msg];
			});
			console.log(chatHistory);
		});
	});

	const send = () => {
		console.log('hello');
		sendMsg('hello');
	};

	return (
		<div className='App'>
			<Header />
			<ChatHistory chatHistory={chatHistory} />
			<button onClick={send}>Hit</button>
		</div>
	);
}

export default App;
