import actions from './actions';
import services from './services';

const getDetainee = (
  id,
  getDetaineeService = services.getDetainee,
  getDetaineAction = actions.getDetainee,
  // TODO: add global error handler
  // setAppErrorAction = commonActions.setAppError,
) => async (dispatch) => {
  try {
    const payload = await getDetaineeService(id);
    await dispatch(getDetaineAction(payload));
  } catch (error) {
    // dispatch(setAppErrorAction());
  }
};

export default {
  getDetainee,
};
