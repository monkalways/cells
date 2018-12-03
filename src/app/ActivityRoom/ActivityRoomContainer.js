import { connect } from 'react-redux';
import { operations, selectors } from './duck';
import {
  operations as authenticationOperations,
  selectors as authenticationSelectors,
} from '../Authentication/duck';
import { operations as detaineeOperations } from '../Detainee/duck';
import ActivityRoomComponent from './ActivityRoomComponent';

export const mapStateToProps = (
  state,
  isActivityRoomDetaineesLoaded = selectors.isActivityRoomDetaineesLoadedState(state),
  usage = selectors.getActivityRoomUsageState(state),
  detainees = selectors.getActivityRoomDetaineesState(state),
  isCheckingIn = selectors.isCheckingInState(state),
  isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
) => ({
  isActivityRoomDetaineesLoaded,
  usage,
  detainees,
  isCheckingIn,
  isAuthenticated,
});

export const mapDispatchToProps = (dispatch) => ({
  getActivityRoomDetainees: (
    usage,
    getActivityRoomDetainees = operations.getActivityRoomDetainees,
  ) => {
    dispatch(getActivityRoomDetainees(usage));
  },
  handleCheckIn: (
    detaineeId,
    usage,
    checkIn = detaineeOperations.checkDetaineeInToActivityRoom,
  ) => {
    dispatch(checkIn(detaineeId, usage));
  },
  handleSignIn: (startSignIn = authenticationOperations.startSignIn) => {
    dispatch(startSignIn());
  },
  logOut: (first, second, logOut = authenticationOperations.logOut) => {
    dispatch(logOut(first, second));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivityRoomComponent);
