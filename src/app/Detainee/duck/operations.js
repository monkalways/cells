import { push } from 'connected-react-router';

import actions from './actions';
import services from './services';
import commonUtils from '../../utils';

const getAvailableActivityRooms = (
  getAvailableActivityRoomsAction = actions.getAvailableActivityRooms,
  getAvailableActivityRoomsService = services.getAvailableActivityRooms,
  getAvailableActivityRoomsSuccessAction = actions.getAvailableActivityRoomsSuccess,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    await dispatch(getAvailableActivityRoomsAction());
    const payload = await getAvailableActivityRoomsService();
    await dispatch(getAvailableActivityRoomsSuccessAction(payload));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const getAvailableActivityRoomsRefresh = (
  getAvailableActivityRoomsRefreshAction = actions.getAvailableActivityRoomsRefresh,
  getAvailableActivityRoomsService = services.getAvailableActivityRooms,
  getAvailableActivityRoomsSuccessAction = actions.getAvailableActivityRoomsSuccess,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    await dispatch(getAvailableActivityRoomsRefreshAction());
    const payload = await getAvailableActivityRoomsService();
    await dispatch(getAvailableActivityRoomsSuccessAction(payload));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const getAvailableReleaseRooms = (
  getAvailableReleaseRoomsAction = actions.getAvailableReleaseRooms,
  getAvailableReleaseRoomsService = services.getAvailableReleaseRooms,
  getAvailableReleaseRoomsSuccessAction = actions.getAvailableReleaseRoomsSuccess,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    await dispatch(getAvailableReleaseRoomsAction());
    const payload = await getAvailableReleaseRoomsService();
    await dispatch(getAvailableReleaseRoomsSuccessAction(payload));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const getAvailableReleaseRoomsRefresh = (
  getAvailableReleaseRoomsRefreshAction = actions.getAvailableReleaseRoomsRefresh,
  getAvailableReleaseRoomsService = services.getAvailableReleaseRooms,
  getAvailableReleaseRoomsSuccessAction = actions.getAvailableReleaseRoomsSuccess,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    await dispatch(getAvailableReleaseRoomsRefreshAction());
    const payload = await getAvailableReleaseRoomsService();
    await dispatch(getAvailableReleaseRoomsSuccessAction(payload));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const getAvailableRemandRooms = (
  getAvailableRemandRoomsAction = actions.getAvailableRemandRooms,
  getAvailableRemandRoomsService = services.getAvailableRemandRooms,
  getAvailableRemandRoomsSuccessAction = actions.getAvailableRemandRoomsSuccess,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    await dispatch(getAvailableRemandRoomsAction());
    const payload = await getAvailableRemandRoomsService();
    await dispatch(getAvailableRemandRoomsSuccessAction(payload));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const getAvailableRemandRoomsRefresh = (
  getAvailableRemandRoomsRefreshAction = actions.getAvailableRemandRoomsRefresh,
  getAvailableRemandRoomsService = services.getAvailableRemandRooms,
  getAvailableRemandRoomsSuccessAction = actions.getAvailableRemandRoomsSuccess,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    await dispatch(getAvailableRemandRoomsRefreshAction());
    const payload = await getAvailableRemandRoomsService();
    await dispatch(getAvailableRemandRoomsSuccessAction(payload));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const getDetainee = (
  id,
  getDetaineeAction = actions.getDetainee,
  getDetaineeService = services.getDetainee,
  getDetaineeSuccessAction = actions.getDetaineeSuccess,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    await dispatch(getDetaineeAction());
    const payload = await getDetaineeService(id);
    await dispatch(getDetaineeSuccessAction(payload));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const checkDetaineeInToCell = (
  detaineeId,
  cellName,
  goBack = () => {},
  assignToRoomAction = actions.assignToRoom,
  assignToRoomFailureAction = actions.assignToRoomFailure,
  assignToRoomSuccessAction = actions.assignToRoomSuccess,
  checkDetaineeInToCellService = services.checkInToCell,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(assignToRoomAction());
    await checkDetaineeInToCellService(detaineeId, cellName);
    dispatch(assignToRoomSuccessAction());
    goBack();
  } catch (error) {
    sendErrorMessage({ dispatch, error });
    dispatch(assignToRoomFailureAction());
  }
};

const moveDetaineeToRoom = (
  detaineeId,
  originRoom,
  destinationRoom,
  goBack = () => {},
  assignToRoomAction = actions.assignToRoom,
  assignToRoomFailureAction = actions.assignToRoomFailure,
  assignToRoomSuccessAction = actions.assignToRoomSuccess,
  moveDetaineeToRoomService = services.moveDetaineeToRoom,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(assignToRoomAction());
    await moveDetaineeToRoomService(detaineeId, originRoom, destinationRoom);
    dispatch(assignToRoomSuccessAction());
    goBack();
  } catch (error) {
    sendErrorMessage({ dispatch, error });
    dispatch(assignToRoomFailureAction());
  }
};

const savePhoneCallDecline = (
  arrestId,
  cellName,
  userName,
  phoneCallDeclineAction = actions.declinePhoneCall,
  phoneCallDeclineFailureAction = actions.declinePhoneCallFailure,
  phoneCallDeclineSuccessAction = actions.declinePhoneCallSuccess,
  pushAction = push,
  savePhoneCallDeclineService = services.savePhoneCallDecline,
  sendSuccessMessage = commonUtils.sendSuccessMessage,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(phoneCallDeclineAction());
    await savePhoneCallDeclineService(arrestId, userName);
    dispatch(phoneCallDeclineSuccessAction());
    dispatch(pushAction(`/cells/${cellName}/home/`));
    sendSuccessMessage({ dispatch, message: 'Phone decline saved.' });
  } catch (error) {
    sendErrorMessage({ dispatch, error });
    dispatch(phoneCallDeclineFailureAction());
  }
};

// For testing only. Delete afterwards.
const getUsers = (
  getUsersSerivce = services.getUsers,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    await getUsersSerivce();
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

export default {
  checkDetaineeInToCell,
  getAvailableActivityRooms,
  getAvailableActivityRoomsRefresh,
  getAvailableReleaseRooms,
  getAvailableReleaseRoomsRefresh,
  getAvailableRemandRooms,
  getAvailableRemandRoomsRefresh,
  getDetainee,
  moveDetaineeToRoom,
  savePhoneCallDecline,
  getUsers,
};
