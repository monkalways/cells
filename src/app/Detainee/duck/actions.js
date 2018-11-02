import types from './types';

const getDetainee = (payload) => ({
  type: types.GET_DETAINEE_SUCCESS,
  payload,
});

export default {
  getDetainee,
};
