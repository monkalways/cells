import { push } from 'connected-react-router';

import actions from './actions';
import services from './services';
import commonUtils from '../../utils';

const getAvailableActivityRooms = (
  getAvailableActivityRoomsService = services.getAvailableActivityRooms,
  getAvailableActivityRoomsAction = actions.getAvailableActivityRooms,
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
  getAvailableActivityRoomsService = services.getAvailableActivityRooms,
  getAvailableActivityRoomsRefreshAction = actions.getAvailableActivityRoomsRefresh,
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

const getDetainee = (
  id,
  getDetaineeService = services.getDetainee,
  getDetaineAction = actions.getDetainee,
  getDetaineeSuccessAction = actions.getDetaineeSuccess,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    await dispatch(getDetaineAction());
    const payload = await getDetaineeService(id);
    await dispatch(getDetaineeSuccessAction(payload));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const checkDetaineeInToCell = (
  detaineeId,
  cellName,
  assignToRoomAction = actions.assignToRoom,
  assignToRoomFailureAction = actions.assignToRoomFailure,
  assignToRoomSuccessAction = actions.assignToRoomSuccess,
  getAvailableActivityRoomsOperation = getAvailableActivityRooms,
  getDetaineeOperation = getDetainee,
  checkDetaineeInToCellService = services.checkInToCell,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(assignToRoomAction());
    await checkDetaineeInToCellService(detaineeId, cellName);
    dispatch(assignToRoomSuccessAction());
    dispatch(getDetaineeOperation(detaineeId));
    dispatch(getAvailableActivityRoomsOperation());
  } catch (error) {
    sendErrorMessage({ dispatch, error });
    dispatch(assignToRoomFailureAction());
  }
};

const moveDetaineeToRoom = (
  detaineeId,
  originRoom,
  destinationRoom,
  assignToRoomAction = actions.assignToRoom,
  assignToRoomFailureAction = actions.assignToRoomFailure,
  assignToRoomSuccessAction = actions.assignToRoomSuccess,
  getAvailableActivityRoomsOperation = getAvailableActivityRooms,
  getDetaineeOperation = getDetainee,
  moveDetaineeToRoomService = services.moveDetaineeToRoom,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(assignToRoomAction());
    await moveDetaineeToRoomService(detaineeId, originRoom, destinationRoom);
    dispatch(assignToRoomSuccessAction());
    dispatch(getDetaineeOperation(detaineeId));
    dispatch(getAvailableActivityRoomsOperation());
  } catch (error) {
    sendErrorMessage({ dispatch, error });
    dispatch(assignToRoomFailureAction());
  }
};

const savePhoneCallDecline = (
  arrestId,
  cellName,
  userName,
  savePhoneCallDeclineService = services.savePhoneCallDecline,
  phoneCallDeclineAction = actions.declinePhoneCall,
  phoneCallDeclineFailureAction = actions.declinePhoneCallFailure,
  phoneCallDeclineSuccessAction = actions.declinePhoneCallSuccess,
  pushAction = push,
  sendSuccessMessage = commonUtils.sendSuccessMessage,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(phoneCallDeclineAction());
    await savePhoneCallDeclineService({ arrestId, userName });
    dispatch(phoneCallDeclineSuccessAction());
    dispatch(pushAction(`/cells/${cellName}/home/`));
    sendSuccessMessage({ dispatch, message: 'Phone decline saved.' });
  } catch (error) {
    sendErrorMessage({ dispatch, error });
    dispatch(phoneCallDeclineFailureAction());
  }
};

export default {
  checkDetaineeInToCell,
  getAvailableActivityRoomsRefresh,
  moveDetaineeToRoom,
  getAvailableActivityRooms,
  getDetainee,
  savePhoneCallDecline,
};
