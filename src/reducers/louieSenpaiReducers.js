import ACTION_TYPE from 'reducers/actionType';

// General

export const nameReducer = (state = { name: null }, action) => {
	switch (action.type) {
		case ACTION_TYPE.name:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
};
