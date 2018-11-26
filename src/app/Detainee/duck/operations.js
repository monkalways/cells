import { actions as toastrActions } from 'react-redux-toastr';

import actions from './actions';
import services from './services';
import activityRoomServices from '../../ActivityRoom/duck/services';
import utils from '../utils';
import commonUtils from '../../utils';
import constants from '../constants';

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
  getAvailableActivityRoomsActions = actions.getAvailableActivityRooms,
  getAvailableActivityRoomsSuccessAction = actions.getAvailableActivityRoomsSuccess,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    await dispatch(getAvailableActivityRoomsActions());
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

const moveDetaineeToRoomFromUsage = (
  detaineeId,
  room,
  usage,
  assignToRoomAction = actions.assignToRoom,
  assignToRoomFailureAction = actions.assignToRoomFailure,
  assignToRoomSuccessAction = actions.assignToRoomSuccess,
  getAvailableActivityRoomsOperation = getAvailableActivityRooms,
  getDetaineeOperation = getDetainee,
  moveDetaineeService = services.moveDetainee,
  notifyOperation = notify,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(assignToRoomAction());

    console.log(detaineeId);
    console.log(`To room: ${room}`);
    console.log(`From activity: ${usage}`);

    // Attempt to move the detainee to a new room
    const { error } = await moveDetaineeService({ detaineeId, usage, room });

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
  moveDetaineeToRoomFromUsage,
  getAvailableActivityRooms,
  getDetainee,
};
