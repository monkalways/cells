import types from './types';

const userAuthenticationSuccess = (data) => ({
  type: types.USER_AUTHENTICATION_SUCCESS,
  payload: data,
});

const userAuthenticationFailure = (error) => ({
  type: types.USER_AUTHENTICATION_FAILURE,
  errorMessage: error,
});

const userLogout = () => ({
  type: types.USER_LOGOUT,
});

const resetLogoutRedirect = () => ({
  type: types.RESET_LOGOUT_REDIRECT,
});

export default {
  userAuthenticationSuccess,
  userAuthenticationFailure,
  userLogout,
  resetLogoutRedirect,
};
