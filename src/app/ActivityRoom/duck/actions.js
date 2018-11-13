import types from './types';

const getActivityRoomDetainees = (usage) => ({
  type: types.GET_ACTIVITY_ROOM_DETAINEES,
  usage,
});

const getActivityRoomDetaineesSuccess = (detainees) => ({
  type: types.GET_ACTIVITY_ROOM_DETAINEES_SUCCESS,
  detainees,
});

export default {
  getActivityRoomDetainees,
  getActivityRoomDetaineesSuccess,
};
