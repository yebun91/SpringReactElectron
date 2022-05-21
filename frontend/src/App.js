import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';

const App = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/" to="/login" />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</div>
	);
};

export default App;
