import types from './types';
import { types as authenticationTypes } from '../../Authentication/duck';

const activityRoomReducerDefaultState = {
  usage: '',
  loaded: false,
  detainees: [],
};

const activityRoomReducer = (
  state = activityRoomReducerDefaultState,
  action,
) => {
  switch (action.type) {
    case types.GET_ACTIVITY_ROOM_DETAINEES:
      return {
        ...state,
        loaded: false,
        usage: action.usage,
      };
    case types.GET_ACTIVITY_ROOM_DETAINEES_SUCCESS:
      return {
        ...state,
        loaded: true,
        detainees: action.detainees,
      };
    case authenticationTypes.LOG_OUT:
      return activityRoomReducerDefaultState;
    default:
      return state;
  }
};

export default activityRoomReducer;
