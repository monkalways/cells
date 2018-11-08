import { push } from 'connected-react-router';

import actions from './actions';
import services from './services';
import utils from '../../utils';

const { startSignIn, startAuthenticate, cancelAuthenticate } = actions;

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

const logOut = (cellName, logOutAction = actions.logOut) => (dispatch) => {
  dispatch(logOutAction());
  dispatch(push(`/cells/${cellName}`));
};

export default {
  startSignIn,
  startAuthenticate,
  authenticate,
  cancelAuthenticate,
  logOut,
};
