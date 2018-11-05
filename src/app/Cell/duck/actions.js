import types from './types';

const getCellDetailsSuccess = (cellDetails) => ({
  type: types.GET_CELL_DETAILS_SUCCESS,
  cellDetails,
});

const getCellDetainees = () => ({
  type: types.GET_CELL_DETAINEES,
});

const getCellDetaineesSuccess = (cellDetainees) => ({
  type: types.GET_CELL_DETAINEES_SUCCESS,
  cellDetainees,
});

const visualCheck = (detainee) => ({
  type: types.VISUAL_CHECK,
  detainee,
});

const verbalCheck = (detainee) => ({
  type: types.VERBAL_CHECK,
  detainee,
});

const saveCellCheck = () => ({
  type: types.SAVE_CELL_CHECK,
});

const saveCellCheckSuccess = () => ({
  type: types.SAVE_CELL_CHECK_SUCCESS,
});

export default {
  getCellDetailsSuccess,
  getCellDetaineesSuccess,
  getCellDetainees,
  visualCheck,
  verbalCheck,
  saveCellCheck,
  saveCellCheckSuccess,
};
