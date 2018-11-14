import actions from './actions';
import services from './services';
import utils from '../../utils';

const getAvailableActivityRooms = (
  id,
  getAvailableActivityRoomsService = services.getAvailableActivityRooms,
  getAvailableActivityRoomsActions = actions.getAvailableActivityRooms,
  getAvailableActivityRoomsSuccessAction = actions.getAvailableActivityRoomsSuccess,
) => async (dispatch) => {
  try {
    await dispatch(getAvailableActivityRoomsActions());
    const payload = await getAvailableActivityRoomsService(id);
    await dispatch(getAvailableActivityRoomsSuccessAction(payload));
  } catch (error) {
    utils.sendErrorMessage({ dispatch, error });
  }
};

const getDetainee = (
  id,
  getDetaineeService = services.getDetainee,
  getDetaineAction = actions.getDetainee,
  getDetaineeSuccessAction = actions.getDetaineeSuccess,
) => async (dispatch) => {
  try {
    await dispatch(getDetaineAction());
    const payload = await getDetaineeService(id);
    await dispatch(getDetaineeSuccessAction(payload));
  } catch (error) {
    utils.sendErrorMessage({ dispatch, error });
  }
};

export default {
  getAvailableActivityRooms,
  getDetainee,
};
