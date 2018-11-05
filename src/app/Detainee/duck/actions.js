import types from './types';

const getDetainee = () => ({
  type: types.GET_DETAINEE,
});

const getDetaineeSuccess = (payload) => ({
  type: types.GET_DETAINEE_SUCCESS,
  payload,
});

export default {
  getDetainee,
  getDetaineeSuccess,
};
