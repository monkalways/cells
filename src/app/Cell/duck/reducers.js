import { combineReducers } from 'redux';
import types from './types';

const detailsReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_CELL_DETAILS_SUCCESS:
      return {
        ...action.cellDetails,
      };
    default:
      return state;
  }
};

const detaineesReducerDefaultState = {
  loaded: false,
  data: [],
};

const detaineesReducer = (state = detaineesReducerDefaultState, action) => {
  switch (action.type) {
    case types.GET_CELL_DETAINEES:
      return {
        ...state,
        loaded: false,
      };
    case types.GET_CELL_DETAINEES_SUCCESS:
      return {
        loaded: true,
        data: [...action.cellDetainees],
      };
    default:
      return state;
  }
};

const cellCheckReducer = (state = {}, action) => {
  switch (action.type) {
    case types.VISUAL_CHECK:
      // eslint-disable-next-line no-param-reassign
      state[action.detainee.id] = {
        detainee: action.detainee,
        visual: true,
        verbal: false,
      };
      return { ...state };
    case types.VERBAL_CHECK:
      // eslint-disable-next-line no-param-reassign
      state[action.detainee.id] = {
        detainee: action.detainee,
        visual: false,
        verbal: true,
      };
      return { ...state };
    default:
      return state;
  }
};

const cellReducer = combineReducers({
  details: detailsReducer,
  detainees: detaineesReducer,
  cellCheck: cellCheckReducer,
});

export default cellReducer;
