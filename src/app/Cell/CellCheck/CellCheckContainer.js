import { connect } from 'react-redux';
import { operations, selectors } from '../duck';
import { selectors as authenticationSelectors } from '../../Authentication/duck';
import CellCheckComponent from './CellCheckComponent';

export const mapStateToProps = (
  state,
  cellDetainees = selectors.getInCellDetaineesState(state),
  isCellDetaineesLoaded = selectors.isCellDetaineesLoadedState(state),
  isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
) => ({
  cellDetainees,
  isAuthenticated,
  isCellDetaineesLoaded,
});

export const mapDispatchToProps = (dispatch) => ({
  getCellDetainees: (name, getCellDetainees = operations.getCellDetainees) => {
    dispatch(getCellDetainees(name));
  },
  visualCheck: (detainee, visualCheck = operations.visualCheck) => {
    dispatch(visualCheck(detainee));
  },
  verbalCheck: (detainee, verbalCheck = operations.verbalCheck) => {
    dispatch(verbalCheck(detainee));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CellCheckComponent);
