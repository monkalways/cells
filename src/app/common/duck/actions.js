import types from './types';

const getVersionsSuccess = (payload) => ({
  type: types.GET_VERSIONS_SUCCESS,
  payload,
});

const refreshAuthenticationTimeout = () => ({
  type: types.REFRESH_AUTHENTICATION_TIMEOUT,
});

const startAuthenticationTimeout = (logout) => ({
  type: types.START_AUTHENTICATION_TIMEOUT,
  logout,
});

const stopAuthenticationTimeout = () => ({
  type: types.STOP_AUTHENTICATION_TIMEOUT,
});

export default {
  getVersionsSuccess,
  refreshAuthenticationTimeout,
  startAuthenticationTimeout,
  stopAuthenticationTimeout,
};
