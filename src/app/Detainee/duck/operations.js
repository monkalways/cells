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

const checkDetaineeInToCell = (
  detaineeId,
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

const moveDetaineeToActivityRoom = (
  detaineeId,
  from,
  destinationRoom,
  assignToRoomAction = actions.assignToRoom,
  assignToRoomFailureAction = actions.assignToRoomFailure,
  assignToRoomSuccessAction = actions.assignToRoomSuccess,
  getAvailableActivityRoomsOperation = getAvailableActivityRooms,
  getDetaineeOperation = getDetainee,
  moveToActivityRoomService = services.moveToActivityRoom,
  notifyOperation = notify,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(assignToRoomAction());

    // Attempt to move the detainee to a new room
    const { error } = await moveToActivityRoomService({
      detaineeId,
      from,
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

const moveDetaineeToCell = (
  detaineeId,
  from,
  assignToRoomAction = actions.assignToRoom,
  assignToRoomFailureAction = actions.assignToRoomFailure,
  assignToRoomSuccessAction = actions.assignToRoomSuccess,
  getAvailableActivityRoomsOperation = getAvailableActivityRooms,
  getDetaineeOperation = getDetainee,
  moveToCellService = services.moveToCell,
  notifyOperation = notify,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(assignToRoomAction());

    // Attempt to move the detainee to their cell
    const { error } = await moveToCellService({ detaineeId, from });

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
  checkDetaineeInToCell,
  getAvailableActivityRoomsRefresh,
  moveDetaineeToActivityRoom,
  moveDetaineeToCell,
  getAvailableActivityRooms,
  getDetainee,
};
