import actions from './actions';
import services from './services';
import types from './types';

const setIsMeal = () => dispatch => {
  dispatch(actions.setIsMeal());
}

const setIsMedication = () => dispatch => {
  dispatch(actions.setIsMedication());
}

const setIsCellCheck = () => dispatch => {
  dispatch(actions.setIsCellCheck());
}

const resetCellWelfare = () => dispatch => {
  dispatch(actions.resetCellWelfare());
}

const saveCellWelfare = (cellWelfareData) => async (dispatch) => {
  cellWelfareData
    .filter(detaineeWelfareData => detaineeWelfareData.detentionLogAction !== types.WELFARE_ACTION_NOTAPPLICABLE)
    .map(async detaineeWelfareData => {
      const data = await services.saveDetaineeWelfare(detaineeWelfareData);
      if (data.isSuccess) {
        return dispatch(actions.deleteDetaineeWelfare(detaineeWelfareData));
      }
      // else {
      //   return dispatch(actions.resetCellWelfare());
      // }
    })
  await dispatch(actions.resetCellWelfare());
};

const createDetaineeWelfareData = (detaineeWelfareData) => (dispatch, getState) => {
  //add these 2 properties to the 'detaineeWelfareData' object
  detaineeWelfareData.userCardNumber = getState().sessionManagementData.session.userCardNumber;
  detaineeWelfareData.userName = getState().sessionManagementData.session.userName;

  dispatch(actions.createDetaineeWelfareData(detaineeWelfareData));
}

const editDetaineeWelfareData = (detaineeWelfareData) => (dispatch, getState) => {
  //add these 2 properties to the 'detaineeWelfareData' object
  detaineeWelfareData.userCardNumber = getState().sessionManagementData.session.userCardNumber;
  detaineeWelfareData.userName = getState().sessionManagementData.session.userName;

  dispatch(actions.editDetaineeWelfareData(detaineeWelfareData));
}

const deleteDetaineeWelfareData = (detaineeWelfareData) => (dispatch) => {
  dispatch(actions.deleteDetaineeWelfareData(detaineeWelfareData));
}

const deleteCellWelfareData = () => (dispatch) => {
  dispatch(actions.deleteCellWelfareData());
}

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
