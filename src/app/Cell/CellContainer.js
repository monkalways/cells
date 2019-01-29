import { connect } from 'react-redux';
import { operations, selectors } from './duck';
import {
  operations as authenticationOperations,
  selectors as authenticationSelectors,
} from '../Authentication/duck';
import { operations as commonOperations } from '../common/duck';
import CellComponent from './CellComponent';

export const mapStateToProps = (
  state,
  cellDetails = selectors.getCellDetailsState(state),
  isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
) => ({
  cellDetails,
  isAuthenticated,
});

export const mapDispatchToProps = (dispatch) => ({
  getCellDetails: (name, getCellDetails = operations.getCellDetails) => {
    dispatch(getCellDetails(name));
  },
  handleLogOut: (first, second, logOut = authenticationOperations.logOut) => {
    dispatch(logOut(first, second));
  },
  // eslint-disable-next-line max-len
  refreshAuthenticationTimeout: (refreshAuthenticationTimeout = commonOperations.refreshAuthenticationTimeout) => {
    dispatch(refreshAuthenticationTimeout());
  },
  startAuthenticationTimeout: (
    logout,
    startAuthenticationTimeout = commonOperations.startAuthenticationTimeout,
  ) => {
    dispatch(startAuthenticationTimeout(logout));
  },
  // eslint-disable-next-line max-len
  stopAuthenticationTimeout: (stopAuthenticationTimeout = commonOperations.stopAuthenticationTimeout) => {
    dispatch(stopAuthenticationTimeout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CellComponent);
