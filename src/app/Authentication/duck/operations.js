import actions from './actions';
import services from './services';

import utils from '../../utils';

const {
  startSignIn, startAuthenticate, cancelAuthenticate, logOut,
} = actions;

const authenticate = (
  cardId,
  authenticateService = services.authenticate,
  startAuthenticateAction = actions.startAuthenticate,
  authenticateSuccessAction = actions.authenticateSuccess,
  authenticateFailAction = actions.authenticateFail,
) => async (dispatch) => {
  try {
    dispatch(startAuthenticateAction({ cardId }));
    const userName = await authenticateService(cardId);
    dispatch(authenticateSuccessAction({ userName }));
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(authenticateFailAction());
    } else {
      utils.sendErrorMessage({ dispatch, error });
    }
  }
};

export default {
  startSignIn,
  startAuthenticate,
  authenticate,
  cancelAuthenticate,
  logOut,
};
