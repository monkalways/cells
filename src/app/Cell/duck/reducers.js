import _ from 'lodash';
import { combineReducers } from 'redux';
import types from './types';
import { types as authenticationTypes } from '../../Authentication/duck';

export const detailsReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_CELL_DETAILS_SUCCESS:
      return {
        ...action.cellDetails,
      };
    case authenticationTypes.LOG_OUT:
      return null;
    default:
      return state;
  }
};

const detaineesReducerDefaultState = {
  loaded: false,
  data: [],
};

export const detaineesReducer = (
  state = detaineesReducerDefaultState,
  action,
) => {
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
    case authenticationTypes.LOG_OUT:
      return detaineesReducerDefaultState;
    default:
      return state;
  }
};

const cellCheckReducerDefaultState = {
  saving: false,
  data: {},
};

export const cellCheckReducer = (
  state = cellCheckReducerDefaultState,
  action,
) => {
  const currentState = _.cloneDeep(state);
  switch (action.type) {
    case types.VISUAL_CHECK:
      currentState.data[action.detainee.id] = {
        detainee: action.detainee,
        visual: true,
        verbal: false,
      };
      return { ...currentState };
    case types.VERBAL_CHECK:
      currentState.data[action.detainee.id] = {
        detainee: action.detainee,
        visual: false,
        verbal: true,
      };
      return { ...currentState };
    case types.SAVE_CELL_CHECK:
      return { ...currentState, saving: true };
    case types.SAVE_CELL_CHECK_SUCCESS:
      return { saving: false, data: {} };
    case authenticationTypes.LOG_OUT:
      return cellCheckReducerDefaultState;
    default:
      return currentState;
  }
};

const mealReducerDefaultState = {
  saving: false,
  data: {},
};

export const mealReducer = (state = mealReducerDefaultState, action) => {
  const currentState = _.cloneDeep(state);
  switch (action.type) {
    case types.ACCEPT_MEAL:
      currentState.data[action.detainee.id] = {
        detainee: action.detainee,
        accept: true,
        reject: false,
        notApplicable: false,
      };
      return { ...currentState };
    case types.REJECT_MEAL:
      currentState.data[action.detainee.id] = {
        detainee: action.detainee,
        accept: false,
        reject: true,
        notApplicable: false,
      };
      return { ...currentState };
    case types.NOT_APPLICABLE_MEAL:
      currentState.data[action.detainee.id] = {
        detainee: action.detainee,
        accept: false,
        reject: false,
        notApplicable: true,
      };
      return { ...currentState };
    case types.SAVE_MEAL:
      return { ...currentState, saving: true };
    case types.SAVE_MEAL_SUCCESS:
      return { saving: false, data: {} };
    case authenticationTypes.LOG_OUT:
      return mealReducerDefaultState;
    default:
      return currentState;
  }
};

const medicationReducerDefaultState = {
  saving: false,
  data: {},
};

export const medicationReducer = (
  state = medicationReducerDefaultState,
  action,
) => {
  const currentState = _.cloneDeep(state);
  switch (action.type) {
    case types.ACCEPT_MEDICATION:
      currentState.data[action.detainee.id] = {
        detainee: action.detainee,
        accept: true,
        reject: false,
        notApplicable: false,
      };
      return { ...currentState };
    case types.REJECT_MEDICATION:
      currentState.data[action.detainee.id] = {
        detainee: action.detainee,
        accept: false,
        reject: true,
        notApplicable: false,
      };
      return { ...currentState };
    case types.NOT_APPLICABLE_MEDICATION:
      currentState.data[action.detainee.id] = {
        detainee: action.detainee,
        accept: false,
        reject: false,
        notApplicable: true,
      };
      return { ...currentState };
    case types.SAVE_MEDICATION:
      return { ...currentState, saving: true };
    case types.SAVE_MEDICATION_SUCCESS:
      return { saving: false, data: {} };
    case authenticationTypes.LOG_OUT:
      return medicationReducerDefaultState;
    default:
      return currentState;
  }
};

const defaultMenuReducerState = {
  anchorElement: null,
};

const menuReducer = (state = defaultMenuReducerState, action) => {
  switch (action.type) {
    case types.TOGGLE_MENU_OPEN:
      return {
        ...state,
        anchorElement: action.payload,
      };
    case types.TOGGLE_MENU_CLOSE:
      return {
        ...state,
        anchorElement: null,
      };
    default:
      return state;
  }
};

const cellReducer = combineReducers({
  details: detailsReducer,
  detainees: detaineesReducer,
  cellCheck: cellCheckReducer,
  meal: mealReducer,
  medication: medicationReducer,
  menu: menuReducer,
});

export default cellReducer;
