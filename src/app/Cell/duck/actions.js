import types from './types';

const getCellDetailsSuccess = (cellDetails) => ({
  type: types.GET_CELL_DETAILS_SUCCESS,
  cellDetails,
});

const getCellDetaineesSuccess = (cellDetainees) => ({
  type: types.GET_CELL_DETAINEES_SUCCESS,
  cellDetainees,
});

const getCellDetainees = () => ({
  type: types.GET_CELL_DETAINEES,
});

const visualCheck = (detainee) => ({
  type: types.VISUAL_CHECK,
  detainee,
});

const verbalCheck = (detainee) => ({
  type: types.VERBAL_CHECK,
  detainee,
});

export default {
  getCellDetailsSuccess,
  getCellDetaineesSuccess,
  getCellDetainees,
  visualCheck,
  verbalCheck,
};
