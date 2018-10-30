import actions from './actions';
import services from './services';

const getCellDetails = (
  name,
  getCellDetailsService = services.getCellDetails,
  getCellDetailsAction = actions.getCellDetails,
  // setAppErrorAction = commonActions.setAppError,
) => async (dispatch) => {
  try {
    const payload = await getCellDetailsService(name);
    await dispatch(getCellDetailsAction(payload));
  } catch (error) {
    // dispatch(setAppErrorAction());
  }
};

export default {
  getCellDetails,
};
