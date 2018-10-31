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

const detaineesReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_CELL_DETAINEES_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
};

const cellReducer = combineReducers({
  details: detailsReducer,
  detainees: detaineesReducer,
});

export default cellReducer;
