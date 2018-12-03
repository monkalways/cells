import actions from './actions';
import services from './services';
import utils from '../../utils';

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
  checkIntoActivityRoomService = services.checkIntoActivityRoom,
  checkInAction = actions.checkIn,
  checkInSuccessAction = actions.checkInSuccess,
  checkInFailAction = actions.checkInFail,
  sendErrorMessage = utils.sendErrorMessage,
) => async (dispatch) => {
  try {
    dispatch(checkInAction());
    await checkIntoActivityRoomService(detaineeId, usage);
    dispatch(checkInSuccessAction());
  } catch (error) {
    sendErrorMessage({ dispatch, error });
    checkInFailAction();
  }
};

export default {
  getActivityRoomDetainees,
  checkIn,
};
