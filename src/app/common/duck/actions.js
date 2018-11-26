import types from './types';

const getVersionsSuccess = (versions) => ({
  type: types.GET_VERSIONS_SUCCESS,
  versions,
});

export default {
  getVersionsSuccess,
};
