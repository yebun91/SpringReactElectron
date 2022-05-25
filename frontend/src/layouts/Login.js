import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from '../store/store';

const Login = () => {
	const [ id, setId ] = useState('');
	const [ pw, setPw ] = useState('');
	const pwOnChange = (e) => {
		setPw(e.target.value);
	};
	const idOnChange = (e) => {
		setId(e.target.value);
	};
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		axios({
			method: 'post',
			url: '/member-login',
			params: { member_id: id, member_pw: pw } // 파라미터를 전달
		}).then(function(response) {
			if (response.data) {
				const member_name = response.data.member_name;
				const member_id = response.data.id;
				alert('로그인 되었음.');
				dispatch(login(member_name, member_id));
			} else {
				alert('로그인 안됨.');
			}
		});
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input name="id" type="text" placeholder="아이디를 입력하세요" value={id} onChange={idOnChange} />
				<br />
				<input name="pw" type="password" placeholder="비밀번호를 입력하세요" value={pw} onChange={pwOnChange} />
				<br />
				<button>로그인</button>
				<NavLink to="/join">회원가입</NavLink>
			</form>
		</div>
	);
};

export default Login;
