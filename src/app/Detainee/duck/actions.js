import types from './types';

const getDetainee = () => ({
  type: types.GET_DETAINEE,
});

const getDetaineeSuccess = (payload) => ({
  type: types.GET_DETAINEE_SUCCESS,
  payload,
});

const getAvailableActivityRooms = () => ({
  type: types.GET_AVAILABLE_ACTIVITY_ROOMS,
});

const getAvailableActivityRoomsSuccess = (payload) => ({
  type: types.GET_AVAILABLE_ACTIVITY_ROOMS_SUCCESS,
  payload,
});

export default {
  getDetainee,
  getDetaineeSuccess,
  getAvailableActivityRooms,
  getAvailableActivityRoomsSuccess,
};
