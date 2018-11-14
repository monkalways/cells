import { combineReducers } from 'redux';
import types from './types';
import { types as authenticationTypes } from '../../Authentication/duck';

const defaultDetaineeProfileState = {
  data: {},
  loaded: false,
};

const detaineeProfileReducer = (
  state = defaultDetaineeProfileState,
  action,
) => {
  switch (action.type) {
    case types.GET_DETAINEE:
      return {
        ...state,
        loaded: false,
      };
    case types.GET_DETAINEE_SUCCESS:
      return {
        data: action.payload,
        loaded: true,
      };
    case authenticationTypes.LOG_OUT:
      return defaultDetaineeProfileState;
    default:
      return state;
  }
};

const defaultActivityRoomsState = {
  availableActivityRooms: [],
  loaded: false,
};

const activityRoomsReducer = (state = defaultActivityRoomsState, action) => {
  switch (action.type) {
    case types.GET_AVAILABLE_ACTIVITY_ROOMS:
      return {
        ...state,
        loaded: false,
      };
    case types.GET_AVAILABLE_ACTIVITY_ROOMS_SUCCESS:
      return {
        availableActivityRooms: action.payload,
        loaded: true,
      };
    case authenticationTypes.LOG_OUT:
      return defaultActivityRoomsState;
    default:
      return state;
  }
};

const detaineeReducer = combineReducers({
  detaineeProfile: detaineeProfileReducer,
  activityRooms: activityRoomsReducer,
});

export default detaineeReducer;
