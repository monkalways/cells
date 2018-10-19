import { connect } from 'react-redux';
import * as FromWelfareManagement from '../WelfareManagement/duck';
import * as FromSessionManagement from '../SessionManagement/duck';
import { operations, selectors } from './duck';
import CellManagementComponent from './CellManagementComponent';

const mapDispatchToProps = (dispatch) => {
  const getCellInfo = (cellName) => {
    dispatch(operations.getCellInfo(cellName));
  };

  const getCellDetainees = (cellName) => {
    dispatch(operations.getCellDetainees(cellName));
  };

  const saveCellWelfare = (cellWelfareData) => {
    dispatch(FromWelfareManagement.operations.saveCellWelfare(cellWelfareData));
  };

  const resetCellWelfare = () => {
    dispatch(FromWelfareManagement.operations.resetCellWelfare());
  };

  const deleteCellWelfareData = () => {
    dispatch(FromWelfareManagement.operations.deleteCellWelfareData());
  };

  return {
    getCellInfo,
    getCellDetainees,
    saveCellWelfare,
    resetCellWelfare,
    deleteCellWelfareData,
  };
};

const mapStateToProps = (state) => ({
  isAuthenticated: FromSessionManagement.selectors.getAuthenticationFlag(state),
  cell: selectors.getCellInfo(state),
  cellDetainees: selectors.getCellDetainees(state),
  isMeal: FromWelfareManagement.selectors.getMealFlag(state),
  isMedication: FromWelfareManagement.selectors.getMedicationFlag(state),
  isCellCheck: FromWelfareManagement.selectors.getCellCheckFlag(state),
  cellWelfareData: FromWelfareManagement.selectors.getCellWelfareData(state),
});

const CellManagementContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CellManagementComponent);

export default CellManagementContainer;
