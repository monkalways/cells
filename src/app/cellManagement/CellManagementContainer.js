import { connect } from "react-redux";
import { operations as cellOperations } from './duck';
import { operations as welfareOperations } from 'app/welfareManagement/duck';
import CellManagementComponent from './CellManagementComponent';

const mapDispatchToProps = (dispatch) => {
  const getCellInfo = (cellName) => {
    dispatch(cellOperations.getCellInfo(cellName));
  };

  const getCellDetainees = (cellName) => {
    dispatch(cellOperations.getCellDetainees(cellName));
  };

  const saveCellWelfare = (cellWelfareData) => {
    dispatch(welfareOperations.saveCellWelfare(cellWelfareData));
  };

  const resetCellWelfare = () => {
    dispatch(welfareOperations.resetCellWelfare());
  };

  const deleteCellWelfareData = () => {
    dispatch(welfareOperations.deleteCellWelfareData());
  };

  return {
    getCellInfo,
    getCellDetainees,
    saveCellWelfare,
    resetCellWelfare,
    deleteCellWelfareData
  };
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.sessionManagementData.session.isAuthenticated,
    cell: state.cellManagementData.cellInfo,
    cellDetainees: state.cellManagementData.cellDetainees,
    isMeal: state.welfareManagementData.welfareFlagData.isMeal,
    isMedication: state.welfareManagementData.welfareFlagData.isMedication,
    isCellCheck: state.welfareManagementData.welfareFlagData.isCellCheck,
    cellWelfareData: state.welfareManagementData.cellWelfareData,
  }
};

const CellManagementContainer = connect(mapStateToProps, mapDispatchToProps)(CellManagementComponent);

export default CellManagementContainer;
