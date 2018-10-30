import types from './types';

const getCellDetails = (payload) => ({
  type: types.GET_CELL_DETAILS_SUCCESS,
  payload,
});

export default {
  getCellDetails,
};
