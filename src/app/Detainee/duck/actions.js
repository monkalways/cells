import types from './types';

const assignToRoom = () => ({
  type: types.ASSIGN_TO_ROOM,
});

const assignToRoomFailure = () => ({
  type: types.ASSIGN_TO_ROOM_FAILURE,
});

const assignToRoomSuccess = () => ({
  type: types.ASSIGN_TO_ROOM_SUCCESS,
});

const getAvailableActivityRooms = () => ({
  type: types.GET_AVAILABLE_ACTIVITY_ROOMS,
});

const getAvailableActivityRoomsSuccess = (payload) => ({
  type: types.GET_AVAILABLE_ACTIVITY_ROOMS_SUCCESS,
  payload,
});

const getDetainee = () => ({
  type: types.GET_DETAINEE,
});

const getDetaineeSuccess = (payload) => ({
  type: types.GET_DETAINEE_SUCCESS,
  payload,
});

export default {
  assignToRoom,
  assignToRoomFailure,
  assignToRoomSuccess,
  getAvailableActivityRooms,
  getAvailableActivityRoomsSuccess,
  getDetainee,
  getDetaineeSuccess,
};
