import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Messages from './Messages';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { useSelector } from 'react-redux';

const Main = () => {
	const login = useSelector((state) => state.userInfo);
	const [ messages, setMessages ] = useState([]);
	const { chat_room_id } = useParams();
	const [ sendMssage, setSendMssage ] = useState('');
	const scrollRef = useRef();

	const sock = new SockJS('http://localhost:8080/chat/chatting');
	let client = Stomp.over(sock);
	client.connect({}, () => {
		// -> 받을때
		client.subscribe(`/sub/chatting/room/${chat_room_id}`, (data) => {
			setMessages(JSON.parse(data.body));
		});
		scrollToBottom();
	});

	const onSubmit = (e) => {
		e.preventDefault();
		client.send(
			`/pub/chat/chatting`,
			{},
			JSON.stringify({
				message: sendMssage,
				chat_room_id: chat_room_id,
				member_id: login.member_id
			})
		); //-> 보낼때
		setSendMssage('');
	};

	useEffect(
		() => {
			if (chat_room_id !== 0) {
				axios({
					method: 'get',
					url: `/chat/${chat_room_id}`,
					responseType: 'json',
					maxContentLength: 2000
				}).then(function(response) {
					setMessages(response.data);
					console.log('messageData : ', response.data);
					scrollToBottom();
				});
			}
		},
		[ chat_room_id ]
	);

	const scrollToBottom = useCallback(() => {
		scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
	}, []);

	return (
		<main>
			{messages.map((message) => (
				<Messages
					key={message.chat_id}
					chat_room_id={message.chat_room_id}
					message={message.message}
					send_date={message.send_date}
					member_id={message.member_id}
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
			<div ref={scrollRef} />
		</main>
	);
};

export default Main;
