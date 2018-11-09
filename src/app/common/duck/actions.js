import types from './types';

const getVersionsSuccess = (payload) => ({
  type: types.GET_VERSIONS_SUCCESS,
  payload,
});

export default {
  getVersionsSuccess,
};
