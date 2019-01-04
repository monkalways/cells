import { combineReducers } from 'redux';
import types from './types';
import { types as authenticationTypes } from '../../Authentication/duck';

const defaultActivityRoomsState = {
  availableActivityRooms: [],
  assigningToRoom: false,
  loaded: false,
  isRefreshing: false,
  updatingDetentionLog: false,
};

export const activityRoomsReducer = (
  state = defaultActivityRoomsState,
  action,
) => {
  switch (action.type) {
    case types.GET_AVAILABLE_ACTIVITY_ROOMS:
      return {
        ...state,
        loaded: false,
      };
    case types.GET_AVAILABLE_ACTIVITY_ROOMS_REFRESH:
      return {
        ...state,
        isRefreshing: true,
      };
    case types.GET_AVAILABLE_ACTIVITY_ROOMS_SUCCESS:
      return {
        ...state,
        loaded: true,
        isRefreshing: false,
        availableActivityRooms: action.payload,
      };
    case types.ASSIGN_TO_ROOM:
      return {
        ...state,
        assigningToRoom: true,
      };
    case types.ASSIGN_TO_ROOM_SUCCESS:
      return {
        ...state,
        assigningToRoom: false,
      };
    case types.ASSIGN_TO_ROOM_FAILURE:
      return {
        ...state,
        assigningToRoom: false,
      };
    case types.DECLINE_PHONECALL:
      return {
        ...state,
        updatingDetentionLog: true,
      };
    case types.DECLINE_PHONECALL_FAILURE:
      return {
        ...state,
        updatingDetentionLog: false,
      };
    case types.DECLINE_PHONECALL_SUCCESS:
      return {
        ...state,
        updatingDetentionLog: false,
      };
    case authenticationTypes.LOG_OUT:
      return defaultActivityRoomsState;
    default:
      return state;
  }
};

const defaultDetaineeProfileState = {
  data: {},
  loaded: false,
};

export const detaineeProfileReducer = (
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

const defaultReleaseRoomsReducerState = {
  data: {},
  loaded: false,
  refreshing: false,
};

export const releaseRoomsReducer = (
  state = defaultReleaseRoomsReducerState,
  action,
) => {
  switch (action.type) {
    case types.GET_AVAILABLE_RELEASE_ROOMS:
      return {
        ...state,
        loaded: false,
      };
    case types.GET_AVAILABLE_RELEASE_ROOMS_REFRESH:
      return {
        ...state,
        refreshing: true,
      };
    case types.GET_AVAILABLE_RELEASE_ROOMS_SUCCESS:
      return {
        data: action.payload,
        loaded: true,
        refreshing: false,
      };
    default:
      return state;
  }
};

const defaultRemandRoomsReducerState = {
  data: {},
  loaded: false,
  refreshing: false,
};

export const remandRoomsReducer = (
  state = defaultRemandRoomsReducerState,
  action,
) => {
  switch (action.type) {
    case types.GET_AVAILABLE_REMAND_ROOMS:
      return {
        ...state,
        loaded: false,
      };
    case types.GET_AVAILABLE_REMAND_ROOMS_REFRESH:
      return {
        ...state,
        refreshing: true,
      };
    case types.GET_AVAILABLE_REMAND_ROOMS_SUCCESS:
      return {
        data: action.payload,
        loaded: true,
        refreshing: false,
      };
    default:
      return state;
  }
};

const detaineeReducer = combineReducers({
  activityRooms: activityRoomsReducer,
  detaineeProfile: detaineeProfileReducer,
  releaseRooms: releaseRoomsReducer,
  remandRooms: remandRoomsReducer,
});

export default detaineeReducer;
