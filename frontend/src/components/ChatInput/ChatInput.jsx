import './ChatInput.scss';

const ChatInput = ({ send }) => {
	return (
		<div className='ChatInput'>
			<input onKeyDown={send} placeholder="Type a message.. Hit Enter to Send"/>
		</div>
	);
};

export default ChatInput;