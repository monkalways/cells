import types from './types';

const authenticate = (payload) => ({
  type: types.AUTHENTICATE,
  payload,
});

const logOut = () => ({
  type: types.LOG_OUT,
});

export default {
  authenticate,
  logOut,
};
