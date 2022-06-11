import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Join from './layouts/Join';
import Login from './layouts/Login';
import { useSelector } from 'react-redux';
import YayaoMain from './layouts/YayaoMain';

const App = () => {
	const login = useSelector((state) => state.userInfo);
	return (
		<div>
			<Routes>
				{login ? <Route path="/*" element={<YayaoMain />} /> : <Route path="/" element={<Login />} />}
				<Route path="/join" element={<Join />} />
			</Routes>
		</div>
	);
};

export default App;
