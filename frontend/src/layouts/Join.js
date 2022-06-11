import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Join_div = styled.div`
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

const Join = () => {
	const [ id, setId ] = useState('');
	const [ pw, setPw ] = useState('');
	const [ confirmPw, setConfirmPw ] = useState('');
	const [ name, setName ] = useState('');
	const navigate = useNavigate();

	const pwOnChange = (e) => {
		setPw(e.target.value);
	};
	const idOnChange = (e) => {
		setId(e.target.value);
	};
	const confirmPwOnChange = (e) => {
		setConfirmPw(e.target.value);
	};
	const nameOnChange = (e) => {
		setName(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (pw !== confirmPw) {
			return alert('비밀번호가 일치하지 않습니다.');
		}
		axios({
			method: 'post',
			url: '/member-join',
			params: { member_id: id, member_pw: pw, member_name: name } // 파라미터를 전달
		}).then(function(response) {
			if (response.data === 1) {
				alert('가입되었습니다!');
				navigate('/');
			} else {
				alert('잠시 후 다시 요청하십시오.');
			}
		});
	};

	return (
		<Join_div>
			<h1>회원가입</h1>
			<form onSubmit={onSubmit}>
				<input name="id" type="text" placeholder="아이디를 입력하세요" value={id} onChange={idOnChange} />
				<input name="pw" type="password" placeholder="비밀번호를 입력하세요" value={pw} onChange={pwOnChange} />
				<input
					name="pw2"
					type="password"
					placeholder="비밀번호를 입력하세요2"
					value={confirmPw}
					onChange={confirmPwOnChange}
				/>
				<input name="name" type="text" placeholder="이름을 입력하세요" value={name} onChange={nameOnChange} />
				<div className="bottom_btn">
					<button className="fill_button">회원가입</button>
					<NavLink to="/">
						<button type="button" className="join_btn">
							취소
						</button>
					</NavLink>
				</div>
			</form>
		</Join_div>
	);
};

export default Join;
