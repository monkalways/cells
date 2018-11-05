import actions from './actions';
import services from './services';

const getDetainee = (
  id,
  getDetaineeService = services.getDetainee,
  getDetaineAction = actions.getDetainee,
  getDetaineeSuccessAction = actions.getDetaineeSuccess,
  // TODO: add global error handler
  // setAppErrorAction = commonActions.setAppError,
) => async (dispatch) => {
  try {
    await dispatch(getDetaineAction());
    const payload = await getDetaineeService(id);
    await dispatch(getDetaineeSuccessAction(payload));
  } catch (error) {
    // dispatch(setAppErrorAction());
  }
};

export default {
  getDetainee,
};
