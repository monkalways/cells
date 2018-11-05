import { connect } from 'react-redux';
import { operations, selectors } from '../duck';
import { selectors as authenticationSelectors } from '../../Authentication/duck';
import CellCheckComponent from './CellCheckComponent';

export const mapStateToProps = (
  state,
  isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
  cellDetainees = selectors.getInCellDetaineesState(state),
  isCellDetaineesLoaded = selectors.isCellDetaineesLoadedState(state),
  cellCheck = selectors.getCellCheckState(state),
  isSavingCellCheck = selectors.isSavingCellCheckState(state),
) => ({
  isAuthenticated,
  cellDetainees,
  isCellDetaineesLoaded,
  cellCheck,
  isSavingCellCheck,
});

export const mapDispatchToProps = (dispatch) => ({
  getCellDetainees: async (
    name,
    getCellDetainees = operations.getCellDetaineesForCellCheck,
  ) => {
    await dispatch(getCellDetainees(name));
  },
  visualCheck: (detainee, visualCheck = operations.visualCheck) => {
    dispatch(visualCheck(detainee));
  },
  verbalCheck: (detainee, verbalCheck = operations.verbalCheck) => {
    dispatch(verbalCheck(detainee));
  },
  visualCheckAll: (detainees, visualCheck = operations.visualCheck) => {
    detainees.forEach((detainee) => dispatch(visualCheck(detainee)));
  },
  verbalCheckAll: (detainees, verbalCheck = operations.verbalCheck) => {
    detainees.forEach((detainee) => dispatch(verbalCheck(detainee)));
  },
  onSave: (cellCheck, cellName, saveCellCheck = operations.saveCellCheck) => {
    dispatch(saveCellCheck(cellCheck, cellName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CellCheckComponent);
