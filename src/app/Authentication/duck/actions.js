import types from './types';

const authenticate = (payload) => ({
  type: types.AUTHENTICATE,
  payload,
});

export default {
  authenticate,
};
