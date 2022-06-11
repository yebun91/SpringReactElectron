import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ConfigForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-right: 20px;
	label {
		padding-bottom: 10px;
		span {
			padding-bottom: 10px;
		}
		input {
			border: 1px solid var(--ligth-gray-color);
			display: inline-block;
			width: 100%;
		}
	}
	.buttonBox {
		margin-left: 20px;
		text-align: center;
		button {
			margin: 0 30px;
			width: 80px;
		}
	}
`;

const AddRoom = ({ open, handleClose }) => {
	//store 에 port 라는 변수를 가져오기
	const [ config ] = useState(false);
	const [ input, setInput ] = useState('');
	const [ message, setMessage ] = useState(false);
	const login = useSelector((state) => state.userInfo);

	const onSubmit = (e) => {
		e.preventDefault();
		setInput('');
		axios({
			method: 'get',
			url: '/add-list',
			params: { search_id: input, member_id: login['member_id'] }, // 파라미터를 전달
			responseType: 'json',
			maxContentLength: 2000
		}).then(function(response) {
			if (response.data === 1) {
				setMessage(false);
				handleClose(config);
			} else {
				setMessage(true);
			}
		});
	};

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		boxShadow: 24,
		p: 4
	};
	return (
		<div>
			<Modal
				open={open}
				onClose={() => handleClose(config)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						친구추가
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }} component="div">
						<ConfigForm onSubmit={onSubmit}>
							<label>
								<span>아이디로 검색</span>
								<input
									type="text"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input}
								/>
							</label>
							<p>검색 결과가 없습니다.</p>
							<div className="buttonBox">
								<button className="fill_button">추가</button>
								<button className="nomal_button" type="button" onClick={() => handleClose(config)}>
									취소
								</button>
							</div>
						</ConfigForm>
					</Typography>
				</Box>
			</Modal>
		</div>
	);
};

export default AddRoom;
