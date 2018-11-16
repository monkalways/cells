import types from './types';

const startSignIn = () => ({
  type: types.START_SIGN_IN,
});

const startAuthenticate = (cardId) => ({
  type: types.START_AUTHENTICATE,
  cardId,
});

const authenticateSuccess = (userName) => ({
  type: types.AUTHENTICATE_SUCCESS,
  userName,
});

const authenticateFail = () => ({
  type: types.AUTHENTICATE_FAIL,
});

const cancelAuthenticate = () => ({
  type: types.CANCEL_AUTHENTICATE,
});

const logOut = () => ({
  type: types.LOG_OUT,
});

export default {
  startSignIn,
  startAuthenticate,
  authenticateSuccess,
  authenticateFail,
  cancelAuthenticate,
  logOut,
};
