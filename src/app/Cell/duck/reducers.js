import { combineReducers } from 'redux';
import types from './types';

const detailsReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_CELL_DETAILS_SUCCESS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

const cellReducer = combineReducers({
  details: detailsReducer,
});

export default cellReducer;
