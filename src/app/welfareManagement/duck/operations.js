import actions from './actions';
import services from './services';
import * as constants from '../../constants';

/* set Welfare Flags */
const setIsMeal = () => (dispatch) => {
  dispatch(actions.setIsMeal());
};

const setIsMedication = () => (dispatch) => {
  dispatch(actions.setIsMedication());
};

const setIsCellCheck = () => (dispatch) => {
  dispatch(actions.setIsCellCheck());
};

const resetCellWelfare = () => (dispatch) => {
  dispatch(actions.resetCellWelfare());
};

/* Welfare Management Data */
const saveCellWelfare = (cellWelfareData) => async (dispatch) => {
  cellWelfareData
    .filter((d) => d.detentionLogAction !== constants.WELFARE_ACTION_NOTAPPLICABLE)
    .map(async (detaineeWelfareData) => {
      const data = await services.saveDetaineeWelfare(detaineeWelfareData);
      if (data.isSuccess) {
        dispatch(actions.deleteDetaineeWelfare(detaineeWelfareData));
        return true;
      }
      return false;
    });
  await dispatch(actions.resetCellWelfare());
};

const createDetaineeWelfareData = (detaineeWelfareData) => (dispatch) => {
  dispatch(actions.createDetaineeWelfareData(detaineeWelfareData));
};

const editDetaineeWelfareData = (detaineeWelfareData) => (dispatch) => {
  dispatch(actions.editDetaineeWelfareData(detaineeWelfareData));
};

const deleteDetaineeWelfareData = (detaineeWelfareData) => (dispatch) => {
  dispatch(actions.deleteDetaineeWelfareData(detaineeWelfareData));
};

const deleteCellWelfareData = () => (dispatch) => {
  dispatch(actions.deleteCellWelfareData());
};

export default {
  setIsMeal,
  setIsMedication,
  setIsCellCheck,
  resetCellWelfare,
  saveCellWelfare,
  createDetaineeWelfareData,
  editDetaineeWelfareData,
  deleteDetaineeWelfareData,
  deleteCellWelfareData,
};
