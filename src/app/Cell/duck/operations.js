import actions from './actions';
import services from './services';

const getCellDetails = (
  name,
  getCellDetailsService = services.getCellDetails,
  getCellDetailsSuccessAction = actions.getCellDetailsSuccess,
  // TODO: add global error handler
  // setAppErrorAction = commonActions.setAppError,
) => async (dispatch) => {
  try {
    const payload = await getCellDetailsService(name);
    await dispatch(getCellDetailsSuccessAction(payload));
  } catch (error) {
    // dispatch(setAppErrorAction());
  }
};

const getCellDetainees = (
  name,
  getCellDetaineesService = services.getCellDetainees,
  getCellDetaineesAction = actions.getCellDetainees,
  getCellDetaineesSuccessAction = actions.getCellDetaineesSuccess,
  // TODO: add global error handler
  // setAppErrorAction = commonActions.setAppError,
) => async (dispatch) => {
  try {
    await dispatch(getCellDetaineesAction());
    const payload = await getCellDetaineesService(name);
    await dispatch(getCellDetaineesSuccessAction(payload));
  } catch (error) {
    // dispatch(setAppErrorAction());
  }
};

const { visualCheck, verbalCheck } = actions;

export default {
  getCellDetails,
  getCellDetainees,
  visualCheck,
  verbalCheck,
};
