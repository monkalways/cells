import actions from './actions';
import services from './services';

const getCellInfo = (cellName) => async dispatch => {
  try {
    const data = await services.getCellInfo(cellName);
    dispatch(actions.getCellInfoSuccess(data.cellInfo));
  } catch (error) {
    dispatch(actions.getCellInfoFailure(error.data));
  }

};

const getCellDetainees = (cellName) => async dispatch => {
  try {
    const data = await services.getCellDetainees(cellName);
    dispatch(actions.getCellDetaineesSuccess(data.cellDetainees));
  } catch (error) {
    dispatch(actions.getCellDetaineesFailure(error.data));
  }
};

export default {
  getCellInfo,
  getCellDetainees,
};
