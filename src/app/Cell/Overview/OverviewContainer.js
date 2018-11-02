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
  isCellDetaineesLoaded = selectors.isCellDetaineesLoadedState(state),
  isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
) => ({
  cellDetainees,
  isCellDetaineesLoaded,
  isAuthenticated,
});

export const mapDispatchToProps = (dispatch) => ({
  getCellDetainees: (
    name,
    getCellDetainees = operations.getCellDetaineesForOverview,
  ) => {
    dispatch(getCellDetainees(name));
  },
  handleSignIn: (
    isAuthenticated,
    authenticate = authenticationOperations.authenticate,
  ) => {
    dispatch(authenticate(isAuthenticated));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OverviewComponent);
