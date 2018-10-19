import types from './types';

/* set Welfare Flags */
const setIsMeal = () => ({
  type: types.SET_ISMEAL,
});

const setIsMedication = () => ({
  type: types.SET_ISMEDICATION,
});

const setIsCellCheck = () => ({
  type: types.SET_ISCELLCHECK,
});

const resetCellWelfare = () => ({
  type: types.RESET_CELL_WELFARE,
});

/* Welfare Management Data */
const createDetaineeWelfareData = (detaineeWelfareData) => ({
  type: types.CREATE_DETAINEE_WELFARE_DATA,
  payload: {
    detaineeWelfareData,
  },
});

const editDetaineeWelfareData = (detaineeWelfareData) => ({
  type: types.EDIT_DETAINEE_WELFARE_DATA,
  payload: {
    detaineeWelfareData,
  },
});

const deleteDetaineeWelfareData = (detaineeWelfareData) => ({
  type: types.DELETE_DETAINEE_WELFARE_DATA,
  payload: {
    detaineeWelfareData,
  },
});

const deleteCellWelfareData = () => ({
  type: types.DELETE_CELL_WELFARE_DATA,
});

export default {
  setIsMeal,
  setIsMedication,
  setIsCellCheck,
  resetCellWelfare,
  createDetaineeWelfareData,
  editDetaineeWelfareData,
  deleteDetaineeWelfareData,
  deleteCellWelfareData,
};
