import types from './types';

const startSignIn = (cardId) => ({
  type: types.START_SIGN_IN,
  payload: { cardId },
});

const startAuthenticate = (payload) => ({
  type: types.START_AUTHENTICATE,
  payload,
});

const authenticateSuccess = (payload) => ({
  type: types.AUTHENTICATE_SUCCESS,
  payload,
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
