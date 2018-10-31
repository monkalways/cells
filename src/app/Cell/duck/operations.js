import actions from './actions';
import services from './services';

const getCellDetails = (
  name,
  getCellDetailsService = services.getCellDetails,
  getCellDetailsAction = actions.getCellDetails,
  // TODO: add global error handler
  // setAppErrorAction = commonActions.setAppError,
) => async (dispatch) => {
  try {
    const payload = await getCellDetailsService(name);
    await dispatch(getCellDetailsAction(payload));
  } catch (error) {
    // dispatch(setAppErrorAction());
  }
};

const getCellDetainees = (
  name,
  getCellDetaineesService = services.getCellDetainees,
  getCellDetaineesAction = actions.getCellDetainees,
  // TODO: add global error handler
  // setAppErrorAction = commonActions.setAppError,
) => async (dispatch) => {
  try {
    const payload = await getCellDetaineesService(name);
    await dispatch(getCellDetaineesAction(payload));
  } catch (error) {
    // dispatch(setAppErrorAction());
  }
};

export default {
  getCellDetails,
  getCellDetainees,
};
