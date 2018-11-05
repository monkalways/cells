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

const cellCheckReducerDefaultState = {
  saving: false,
  data: {},
};

const cellCheckReducer = (state = cellCheckReducerDefaultState, action) => {
  switch (action.type) {
    case types.VISUAL_CHECK:
      // eslint-disable-next-line no-param-reassign
      state.data[action.detainee.id] = {
        detainee: action.detainee,
        visual: true,
        verbal: false,
      };
      return { ...state, data: { ...state.data } };
    case types.VERBAL_CHECK:
      // eslint-disable-next-line no-param-reassign
      state.data[action.detainee.id] = {
        detainee: action.detainee,
        visual: false,
        verbal: true,
      };
      return { ...state, data: { ...state.data } };
    case types.SAVE_CELL_CHECK:
      return { ...state, saving: true };
    case types.SAVE_CELL_CHECK_SUCCESS:
      return { saving: false, data: {} };
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
