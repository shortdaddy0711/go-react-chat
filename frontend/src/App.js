import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
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

	const send = (e) => {
		if (e.keyCode === 13) {
			sendMsg(e.target.value);
			e.target.value = '';
		}
	};

	return (
		<div className='App'>
			<Header />
			<ChatHistory chatHistory={chatHistory} />
			<ChatInput send={send} />
		</div>
	);
}

export default App;
