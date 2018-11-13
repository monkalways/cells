import actions from './actions';
import services from './services';
import utils from '../../utils';

const getActivityRoomDetainees = (
  usage,
  getActivityRoomDetaineesService = services.getActivityRoomDetainees,
  getActivityRoomDetaineesAction = actions.getActivityRoomDetainees,
  getActivityRoomDetaineesSuccessAction = actions.getActivityRoomDetaineesSuccess,
) => async (dispatch) => {
  try {
    dispatch(getActivityRoomDetaineesAction(usage));
    const detainees = await getActivityRoomDetaineesService(usage);
    dispatch(getActivityRoomDetaineesSuccessAction(detainees));
  } catch (error) {
    utils.sendErrorMessage({ dispatch, error });
  }
};

export default {
  getActivityRoomDetainees,
};
