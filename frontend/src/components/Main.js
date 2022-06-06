import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Messages from './Messages';
// import SockJS from 'sockjs-client';
// import Stomp from 'stompjs';
import { useSelector } from 'react-redux';

const Main = () => {
	const login = useSelector((state) => state.userInfo);
	const [ messages, setMessages ] = useState([]);
	const { chat_room_id } = useParams();
	const [ sendMssage, setSendMssage ] = useState('');
	const [ send, setSend ] = useState(0);
	// const sock = new SockJS('http://localhost:8080/chat');
	// let client = Stomp.over(sock);

	const onSubmit = (e) => {
		e.preventDefault();
		axios({
			method: 'post',
			url: `/chat/sendMessage`,
			params: { message: sendMssage, chat_room_id: chat_room_id, member_id: login.member_id }, // 파라미터를 전달
			responseType: 'json',
			maxContentLength: 2000
		}).then(function(response) {
			if (response.data === 1) {
				setSend((prev) => prev + 1);
			}
		});
		setSendMssage('');
	};

	useEffect(
		() => {
			if (chat_room_id !== 0) {
				axios({
					method: 'get',
					url: `/chat/${chat_room_id}`,
					// params: { api_key: "1234", langualge: "en" }, // 파라미터를 전달
					responseType: 'json',
					maxContentLength: 2000
				}).then(function(response) {
					setMessages(response.data);
					console.log('messageData : ', response.data);
				});
			}
		},
		[ chat_room_id, send ]
	);

	return (
		<main>
			{messages.map((message) => (
				<Messages
					key={message.chat_id}
					chat_room_id={message.chat_room_id}
					message={message.message}
					send_date={message.send_date}
				/>
			))}
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="메시지를 입력하세요"
					value={sendMssage}
					onChange={(e) => {
						setSendMssage(e.target.value);
					}}
				/>
			</form>
		</main>
	);
};

export default Main;
