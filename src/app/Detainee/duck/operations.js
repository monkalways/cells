import { actions as toastrActions } from 'react-redux-toastr';

import actions from './actions';
import services from './services';
// import activityRoomServices from '../../ActivityRoom/duck/services';
// import utils from '../utils';
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
  id,
  getAvailableActivityRoomsService = services.getAvailableActivityRooms,
  getAvailableActivityRoomsActions = actions.getAvailableActivityRooms,
  getAvailableActivityRoomsSuccessAction = actions.getAvailableActivityRoomsSuccess,
  sendErrorMessage = commonUtils.sendErrorMessage,
) => async (dispatch) => {
  try {
    await dispatch(getAvailableActivityRoomsActions());
    const payload = await getAvailableActivityRoomsService(id);
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

const assignDetaineeToRoom = (
  detainee,
  room,
  usage,
  assignToRoomAction = actions.assignToRoom,
  assignToRoomFailureAction = actions.assignToRoomFailure,
  assignToRoomSuccessAction = actions.assignToRoomSuccess,
  // createTempAbsenceService = activityRoomServices.createTempAbsence,
  // getActivityRoomDetainees = activityRoomServices.getActivityRoomDetainees,
  getAvailableActivityRoomsOperation = getAvailableActivityRooms,
  getAvailableActivityRoomsService = services.getAvailableActivityRooms,
  getDetaineeOperation = getDetainee,
  // getLastTempAbsenceService = activityRoomServices.getLastTempAbsence,
  notifyOperation = notify,
  sendErrorMessage = commonUtils.sendErrorMessage,
  updateActivityRoomService = services.updateActivityRoom,
  // updateTempAbsenceService = activityRoomServices.updateTempAbsence,
) => async (dispatch) => {
  try {
    dispatch(assignToRoomAction());
    // const lastTempAbsence = await getLastTempAbsenceService(detaineeId);
    // console.log(lastTempAbsence);

    // console.log('assignToRoom');
    // console.log(detainee);

    // Check the detainee's location
    if (!detainee.location) {
      // Case 1: They were in their cell (no temporary absence)

      // Check to see if the room is still available
      const availableActivityRooms = await getAvailableActivityRoomsService(detainee.id);

      // eslint-disable-next-line max-len
      const { availableRooms } = availableActivityRooms.find((activityRoom) => activityRoom.usage.toLowerCase() === usage.toLowerCase());

      if (availableRooms.includes(room)) {
        // console.log(`Room ${room} is still available and we can book it.`);

        // Book this room
        // Note that this throws an NAC error - "Cannot update cell: Update outside of grace period"
        updateActivityRoomService({
          cellName: room,
          remarks: `${detainee.lastName}, ${detainee.firstName}`,
          statusCode: constants.ROOM_STATE_ALLOCATED,
        });

        // Create a temporary absence showing detainee is in transit to the room

        dispatch(assignToRoomSuccessAction());
      } else {
        // Room has become unavailable since the last data refresh
        dispatch(assignToRoomFailureAction());
        notifyOperation(
          dispatch,
          'Room is no longer available. Please try again.',
        );
      }
    }

    dispatch(assignToRoomSuccessAction());

    // If they had a temporary absence, end it.
    // Case 2: They were in transit and will be redirected
    // to a new room ('in transit' temporary absence)
    // Case 3: They were in an activity and will be sent
    //  to a new location ('in progress' temporary absence)
    // if (lastTempAbsence) {
    //   console.log('Found a last temporary absence');
    //   console.log(lastTempAbsence);
    // } else {
    //   // Case 1: They were in their cell (no temporary absence)
    //   // and will be assigned to a new room ('in transit' temporary absence)

    //   // Create new temp absence
    //   const newTempAbsence = {
    //     detaineeId,
    //     reason: utils.getInTransitDescription(usage),
    //     activityRoomName: room,
    //   };
    //   console.log('Did not find temporary absence');
    //   console.log(newTempAbsence);
    //   // await createTempAbsenceService({ ...newTempAbsence });

    //   // dispatch(assignToRoomSuccessAction());
    // }

    // Reload detainee profile
    dispatch(getDetaineeOperation(detainee.id));
    dispatch(getAvailableActivityRoomsOperation());

    // if (lastTempAbsence) {
    //   if (
    //     lastTempAbsence.reason
    //     && lastTempAbsence.reason.includes('In Transit')
    //   ) {
    //     // End current temp absence
    //     await updateTempAbsenceService({
    //       tempAbsenceId: lastTempAbsence.id,
    //       detaineeId,
    //       startTime: lastTempAbsence.startTime,
    //       endTime: new Date(),
    //       reason: lastTempAbsence.reason,
    //       activityRoomName: lastTempAbsence.remarks,
    //     });

    //     // Create new temp absence
    //     const newTempAbsence = {
    //       detaineeId,
    //       reason: lastTempAbsence.reason.replace('In Transit', 'In Progress'),
    //       activityRoomName: lastTempAbsence.remarks,
    //     };
    //     await createTempAbsenceService({ ...newTempAbsence });

    //     dispatch(assignToRoomSuccessAction());

    //     // Reload detainee profile
    //     dispatch(getDetaineeOperation(detaineeId));
    //     dispatch(getAvailableActivityRoomsOperation());
    //   } else {
    //     dispatch(assignToRoomFailureAction());
    //     notifyOperation(
    //       dispatch,
    //       `Detainee [ID: ${detaineeId}]'s location has been changed to ${
    //         lastTempAbsence.reason
    //       }.`,
    //     );
    //   }
    // } else {
    //   dispatch(assignToRoomFailureAction());
    //   notifyOperation(
    //     dispatch,
    //     `Cannot find last temporary absence record for this detainee [ID: ${detaineeId}].`,
    //   );
    // }
  } catch (error) {
    sendErrorMessage({ dispatch, error });
    assignToRoomFailureAction();
  }
};

export default {
  assignDetaineeToRoom,
  getAvailableActivityRooms,
  getDetainee,
};
