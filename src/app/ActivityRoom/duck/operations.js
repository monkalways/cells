import { actions as toastrActions } from 'react-redux-toastr';

import actions from './actions';
import services from './services';
import utils from '../../utils';

const notify = (dispatch, errorMessage) => {
  dispatch(toastrActions.add({
    type: 'error',
    title: 'Cannot move detainee',
    attention: true,
    message: errorMessage,
    timeOut: 10000,
  }));
};

const getActivityRoomDetainees = (
  usage,
  getActivityRoomDetaineesService = services.getActivityRoomDetainees,
  getActivityRoomDetaineesAction = actions.getActivityRoomDetainees,
  getActivityRoomDetaineesSuccessAction = actions.getActivityRoomDetaineesSuccess,
  sendErrorMessage = utils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(getActivityRoomDetaineesAction(usage));
    const detainees = await getActivityRoomDetaineesService(usage);
    dispatch(getActivityRoomDetaineesSuccessAction(detainees));
  } catch (error) {
    sendErrorMessage({ dispatch, error });
  }
};

const checkIn = (
  detaineeId,
  usage,
  getLastTempAbsenceService = services.getLastTempAbsence,
  createTempAbsenceService = services.createTempAbsence,
  updateTempAbsenceService = services.updateTempAbsence,
  getActivityRoomDetaineesOperation = getActivityRoomDetainees,
  checkInAction = actions.checkIn,
  checkInSuccessAction = actions.checkInSuccess,
  checkInFailAction = actions.checkInFail,
  sendErrorMessage = utils.sendErrorMessage,
  notifyOperation = notify,
) => async (dispatch) => {
  try {
    dispatch(checkInAction());
    const lastTempAbsence = await getLastTempAbsenceService(detaineeId);
    if (lastTempAbsence) {
      if (
        lastTempAbsence.reason
        && lastTempAbsence.reason.includes('In Transit')
      ) {
        // end current temp absence
        await updateTempAbsenceService({
          tempAbsenceId: lastTempAbsence.id,
          detaineeId,
          startTime: lastTempAbsence.startTime,
          endTime: new Date(),
          reason: lastTempAbsence.reason,
          activityRoomName: lastTempAbsence.remarks,
        });

        // create new temp absence
        const newTempAbsence = {
          detaineeId,
          reason: lastTempAbsence.reason.replace('In Transit', 'In Progress'),
          activityRoomName: lastTempAbsence.remarks,
        };
        await createTempAbsenceService({ ...newTempAbsence });

        dispatch(checkInSuccessAction());

        // reload activity room detainees
        dispatch(getActivityRoomDetaineesOperation(usage));
      } else {
        dispatch(checkInFailAction());
        notifyOperation(
          dispatch,
          `Detainee [ID: ${detaineeId}]'s location has been changed to ${
            lastTempAbsence.reason
          }.`,
        );
      }
    } else {
      dispatch(checkInFailAction());
      notifyOperation(
        dispatch,
        `Cannot find last temporary absence record for this detainee [ID: ${detaineeId}].`,
      );
    }
  } catch (error) {
    sendErrorMessage({ dispatch, error });
    checkInFailAction();
  }
};

export default {
  getActivityRoomDetainees,
  checkIn,
};
