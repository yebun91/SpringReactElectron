import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const Join = () => {
	const [ id, setId ] = useState('');
	const [ pw, setPw ] = useState('');
	const [ confirmPw, setConfirmPw ] = useState('');
	const [ name, setName ] = useState('');
	const navigate = useNavigate();
	const login = useSelector((state) => state);
	console.log(`login : ${JSON.stringify(login)}`);

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
		<div>
			<form onSubmit={onSubmit}>
				<input name="id" type="text" placeholder="아이디를 입력하세요" value={id} onChange={idOnChange} />
				<br />
				<input name="pw" type="password" placeholder="비밀번호를 입력하세요" value={pw} onChange={pwOnChange} />
				<br />
				<input
					name="pw2"
					type="password"
					placeholder="비밀번호를 입력하세요2"
					value={confirmPw}
					onChange={confirmPwOnChange}
				/>
				<br />
				<input name="name" type="text" placeholder="이름을 입력하세요" value={name} onChange={nameOnChange} />
				<br />
				<button>회원가입</button>
				<NavLink to="/">취소</NavLink>
			</form>
		</div>
	);
};

export default Join;
