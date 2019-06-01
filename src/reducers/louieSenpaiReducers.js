import ACTION_TYPE from 'reducers/actionType';

export const nameReducer = (state = { name: null }, action) => {
	switch (action.type) {
		case ACTION_TYPE.name:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
};

export const rateReducer = (state = { rate: null }, action) => {
	switch (action.type) {
		case ACTION_TYPE.rate:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
};

export const genderReducer = (state = { gender: 'boy' }, action) => {
	switch (action.type) {
		case ACTION_TYPE.gender:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
};

export const qualityReducer = (state = { quality: 4.5 }, action) => {
	switch (action.type) {
		case ACTION_TYPE.quality:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
};

export const characteristicReducer = (state = { characteristics: [] }, action) => {
	switch (action.type) {
		case ACTION_TYPE.characteristics:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
};

export const topicReducer = (state = { topics: [] }, action) => {
	switch (action.type) {
		case ACTION_TYPE.topic:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
};
