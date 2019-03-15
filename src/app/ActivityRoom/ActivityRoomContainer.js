import { connect } from 'react-redux';
import { operations, selectors } from './duck';
import {
  operations as authenticationOperations,
  selectors as authenticationSelectors,
} from '../Authentication/duck';
import { operations as commonOperations } from '../common/duck';
import ActivityRoomComponent from './ActivityRoomComponent';

export const mapStateToProps = (
  state,
  isActivityRoomDetaineesLoaded = selectors.isActivityRoomDetaineesLoadedState(state),
  usage = selectors.getActivityRoomUsageState(state),
  detainees = selectors.getActivityRoomDetaineesState(state),
  isCheckingIn = selectors.isCheckingInState(state),
  isCheckingInSuccess = selectors.isCheckingInSuccessState(state),
  isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
  checkingInDetaineeId = selectors.getCheckingInDetaineeIdState(state),
) => ({
  isActivityRoomDetaineesLoaded,
  usage,
  detainees,
  isCheckingIn,
  isCheckingInSuccess,
  isAuthenticated,
  checkingInDetaineeId,
});

export const mapDispatchToProps = (dispatch) => ({
  getActivityRoomDetainees: (
    usage,
    getActivityRoomDetainees = operations.getActivityRoomDetainees,
  ) => {
    dispatch(getActivityRoomDetainees(usage));
  },
  handleCheckIn: (detaineeId, usage, checkIn = operations.checkIn) => {
    dispatch(checkIn(detaineeId, usage));
  },
  handleSignIn: (startSignIn = authenticationOperations.startSignIn) => {
    dispatch(startSignIn());
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
)(ActivityRoomComponent);
