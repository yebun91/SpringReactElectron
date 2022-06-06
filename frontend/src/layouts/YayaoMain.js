import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import ChatList from '../components/ChatList';
import Main from '../components/Main';

const YayaoMain = () => {
	const [ chats, setChats ] = useState([]);
	const login = useSelector((state) => state.userInfo);
	useEffect(() => {
		axios({
			method: 'get',
			url: '/chat-list',
			params: { id: login['member_id'] }, // 파라미터를 전달
			responseType: 'json',
			maxContentLength: 2000
		}).then(function(response) {
			setChats(response.data);
			console.log('chat-list 랜더됨 : ', response.data);
		});
	}, []);
	return (
		<div style={{ display: 'flex' }}>
			<nav>
				{chats.map((chat) => (
					<Link
						key={chat.chat_room_id}
						to={{
							pathname: `/chat/${chat.chat_room_id}`
						}}
					>
						<div>
							<ChatList chat={chat} />
						</div>
					</Link>
				))}
			</nav>
			<Routes>
				<Route path="/chat/:chat_room_id" element={<Main />} />
			</Routes>
		</div>
	);
};

export default YayaoMain;
