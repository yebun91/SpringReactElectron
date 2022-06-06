import { createStore } from 'redux';

const LOGIN = 'LOGIN';

export const login = (member_name, member_id) => {
	return {
		type: LOGIN,
		member_name: member_name,
		member_id: member_id
	};
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				userInfo: { member_name: action.member_name, member_id: action.member_id }
			};
		default:
			return state;
	}
};

const store = createStore(reducer);

export default store;
