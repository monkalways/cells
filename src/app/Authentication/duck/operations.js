import { push } from 'connected-react-router';

import actions from './actions';
import services from './services';
import commonConstants from '../../constants';

const { startSignIn, startAuthenticate, cancelAuthenticate } = actions;

const authenticate = (
  cardId,
  authenticateService = services.authenticate,
  startAuthenticateAction = actions.startAuthenticate,
  authenticateSuccessAction = actions.authenticateSuccess,
  authenticateFailAction = actions.authenticateFail,
) => async (dispatch) => {
  try {
    dispatch(startAuthenticateAction(cardId));
    const userName = await authenticateService(cardId);
    sessionStorage.setItem(commonConstants.SCAN_CARD_ID_KEY, cardId);
    dispatch(authenticateSuccessAction(userName));
  } catch (error) {
    const errorMessage = error.response.data
      ? error.response.data.message
      : null;
    dispatch(authenticateFailAction(errorMessage));
  }
};

const logOut = (
  first,
  second,
  logOutAction = actions.logOut,
  pushAction = push,
) => (dispatch) => {
  sessionStorage.removeItem(commonConstants.SCAN_CARD_ID_KEY);
  dispatch(logOutAction());
  dispatch(pushAction(`/${first}/${second}`));
};

export default {
  startSignIn,
  startAuthenticate,
  authenticate,
  cancelAuthenticate,
  logOut,
};
