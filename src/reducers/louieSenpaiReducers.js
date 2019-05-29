import { ACTION_TYPE } from "reducers/actionType";

// General
export const inputReducer = (state = { input: null }, action) => {
  switch (action.type) {
    case ACTION_TYPE.inputFetch.begin:
    case ACTION_TYPE.inputFetch.success:
    case ACTION_TYPE.inputFetch.failure:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};
export const emailReducer = (state = { email: null }, action) => {
  switch (action.type) {
    case ACTION_TYPE.email:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

