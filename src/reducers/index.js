import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import {
	nameReducer,
	rateReducer,
	genderReducer,
	qualityReducer,
	characteristicReducer,
	topicReducer
} from 'reducers/louieSenpaiReducers';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

export const store = createStore(
	combineReducers({
		nameReducer,
		rateReducer,
		genderReducer,
		qualityReducer,
		characteristicReducer,
		topicReducer
	}),
	composeEnhancers(applyMiddleware(thunkMiddleware))
);
