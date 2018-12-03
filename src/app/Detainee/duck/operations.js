import { actions as toastrActions } from 'react-redux-toastr';

import actions from './actions';
import services from './services';
import commonUtils from '../../utils';

const notify = (dispatch, errorMessage) => {
  dispatch(toastrActions.add({
    type: 'error',
    title: 'Cannot move detainee',
    attention: true,
    message: errorMessage,
    timeOut: 10000,
  }));
};

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

const checkDetaineeInToActivityRoom = (
  detaineeId,
  usage,
  assignToRoomAction = actions.assignToRoom,
  assignToRoomFailureAction = actions.assignToRoomFailure,
  assignToRoomSuccessAction = actions.assignToRoomSuccess,
  getAvailableActivityRoomsOperation = getAvailableActivityRooms,
  getDetaineeOperation = getDetainee,
  checkDetaineeInToActivityRoomService = services.checkInToActivityRoom,
  notifyOperation = notify,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(assignToRoomAction());

    // Attempt to check the detainee in to their cell
    const { error } = await checkDetaineeInToActivityRoomService({
      detaineeId,
      usage,
    });

    if (error) {
      notifyOperation(dispatch, error);
      dispatch(assignToRoomFailureAction());
    } else {
      dispatch(assignToRoomSuccessAction());
    }

    // Reload detainee profile
    dispatch(getDetaineeOperation(detaineeId));
    dispatch(getAvailableActivityRoomsOperation());
  } catch (error) {
    sendErrorMessage({ dispatch, error });
    dispatch(assignToRoomFailureAction());
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
  notifyOperation = notify,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(assignToRoomAction());

    // Attempt to check the detainee in to their cell
    const { error } = await checkDetaineeInToCellService({
      detaineeId,
      cellName,
    });

    if (error) {
      notifyOperation(dispatch, error);
      dispatch(assignToRoomFailureAction());
    } else {
      dispatch(assignToRoomSuccessAction());
    }

    // Reload detainee profile
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
  notifyOperation = notify,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(assignToRoomAction());

    // Attempt to move the detainee to a new room
    const { error } = await moveDetaineeToRoomService({
      detaineeId,
      originRoom,
      destinationRoom,
    });

    if (error) {
      notifyOperation(dispatch, error);
      dispatch(assignToRoomFailureAction());
    } else {
      dispatch(assignToRoomSuccessAction());
    }

    // Reload detainee profile
    dispatch(getDetaineeOperation(detaineeId));
    dispatch(getAvailableActivityRoomsOperation());
  } catch (error) {
    sendErrorMessage({ dispatch, error });
    dispatch(assignToRoomFailureAction());
  }
};

export default {
  checkDetaineeInToActivityRoom,
  checkDetaineeInToCell,
  getAvailableActivityRoomsRefresh,
  moveDetaineeToRoom,
  getAvailableActivityRooms,
  getDetainee,
};
