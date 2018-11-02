import { combineReducers } from 'redux';
import types from './types';

const defaultDetaineeState = {};

const detaineeReducer = (state = defaultDetaineeState, action) => {
  switch (action.type) {
    case types.GET_DETAINEE_SUCCESS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  detainee: detaineeReducer,
});

export default reducer;
