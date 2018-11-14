import types from './types';

const getActivityRoomDetainees = (usage) => ({
  type: types.GET_ACTIVITY_ROOM_DETAINEES,
  usage,
});

const getActivityRoomDetaineesSuccess = (detainees) => ({
  type: types.GET_ACTIVITY_ROOM_DETAINEES_SUCCESS,
  detainees,
});

const checkIn = () => ({
  type: types.CHECK_IN,
});

const checkInSuccess = () => ({
  type: types.CHECK_IN_SUCCESS,
});

const checkInFail = () => ({
  type: types.CHECK_IN_FAIL,
});

export default {
  getActivityRoomDetainees,
  getActivityRoomDetaineesSuccess,
  checkIn,
  checkInSuccess,
  checkInFail,
};
