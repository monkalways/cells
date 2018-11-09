import actions from './actions';
import services from './services';
import utils from '../../utils';

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
  getDetainee,
};
