import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from '../store/store';
import styled from 'styled-components';

const Login_div = styled.div`
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h1 {
		color: var(--gray-color);
	}
	input {
		display: block;
		margin: 20px 0;
		width: 250px;
		border: 1px solid var(--ligth-gray-color);
	}
	.join_btn {
		color: var(--gray-color);
	}
	.bottom_btn {
		display: flex;
		justify-content: space-between;
		button {
			width: 100px;
			border: 1px solid var(--ligth-gray-color);
		}
	}
`;

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
				const member_id = response.data.member_id;
				alert('로그인 되었음.');
				dispatch(login(member_name, member_id));
			} else {
				alert('로그인 안됨.');
			}
		});
	};

	return (
		<Login_div>
			<h1>YayaoTalk</h1>
			<form onSubmit={onSubmit}>
				<input className="id" name="id" type="text" placeholder="아이디를 입력하세요" value={id} onChange={idOnChange} />
				<input
					className="pw"
					name="pw"
					type="password"
					placeholder="비밀번호를 입력하세요"
					value={pw}
					onChange={pwOnChange}
				/>
				<div className="bottom_btn">
					<button className="fill_button">로그인</button>
					<NavLink to="/join">
						<button type="button" className="join_btn">
							회원가입
						</button>
					</NavLink>
				</div>
			</form>
		</Login_div>
	);
};

export default Login;
