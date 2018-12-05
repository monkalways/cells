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

const declinePhoneCall = () => ({
  type: types.DECLINE_PHONECALL,
});

const declinePhoneCallFailure = () => ({
  type: types.DECLINE_PHONECALL_FAILURE,
});
const declinePhoneCallSuccess = () => ({
  type: types.DECLINE_PHONECALL_SUCCESS,
});

const getAvailableActivityRooms = () => ({
  type: types.GET_AVAILABLE_ACTIVITY_ROOMS,
});

const getAvailableActivityRoomsRefresh = () => ({
  type: types.GET_AVAILABLE_ACTIVITY_ROOMS_REFRESH,
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
  declinePhoneCall,
  declinePhoneCallFailure,
  declinePhoneCallSuccess,
  getAvailableActivityRooms,
  getAvailableActivityRoomsRefresh,
  getAvailableActivityRoomsSuccess,
  getDetainee,
  getDetaineeSuccess,
};
