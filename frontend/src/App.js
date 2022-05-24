import React, { useEffect, useMemo, useState } from 'react';
import Main from './components/Main';
import ChatList from './components/ChatList';
import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import axios from 'axios';
import Join from './layouts/Join';
import Login from './layouts/Login';

const App = () => {
	// const [ chats, setChats ] = useState([]);
	// useEffect(() => {
	// 	axios({
	// 		method: 'get',
	// 		url: '/chat-list',
	// 		// params: { api_key: "1234", langualge: "en" }, // 파라미터를 전달
	// 		responseType: 'json',
	// 		maxContentLength: 2000
	// 	}).then(function(response) {
	// 		setChats(response.data);
	// 		console.log('chat-list 랜더됨 : ', response.data);
	// 	});
	// }, []);

	return (
		<div>
			{/* <nav>
				{chats.map((chat) => (
					<Link
						key={chat.id}
						to={{
							pathname: `/chat/${chat.id}`
						}}
					>
						<div>
							<ChatList name={chat.name} />
						</div>
					</Link>
				))}
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/chat/:id" element={<Main />} />
			</Routes> */}
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/join" element={<Join />} />
			</Routes>
		</div>
	);
};

export default App;
