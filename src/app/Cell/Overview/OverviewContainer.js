import { connect } from 'react-redux';
import { operations, selectors } from '../duck';
import {
  operations as authenticationOperations,
  selectors as authenticationSelectors,
} from '../../Authentication/duck';
import OverviewComponent from './OverviewComponent';

export const mapStateToProps = (
  state,
  cellDetainees = selectors.getCellDetaineesState(state),
  cellName = selectors.getCellNameState(state),
  isAnyDetaineeUnderMedication = selectors.isAnyDetaineeUnderMedicationState(state),
  isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
  isCellDetaineesLoaded = selectors.isCellDetaineesLoadedState(state),
) => ({
  cellDetainees,
  cellName,
  isAnyDetaineeUnderMedication,
  isAuthenticated,
  isCellDetaineesLoaded,
});

export const mapDispatchToProps = (dispatch) => ({
  getCellDetainees: (
    name,
    isAuthenticated,
    getCellDetainees = operations.getCellDetaineesForOverview,
  ) => {
    dispatch(getCellDetainees(name, isAuthenticated));
  },
  handleSignIn: (startSignIn = authenticationOperations.startSignIn) => {
    dispatch(startSignIn());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OverviewComponent);
