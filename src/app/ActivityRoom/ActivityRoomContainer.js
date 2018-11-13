import { connect } from 'react-redux';
import { operations, selectors } from './duck';
import {
  operations as authenticationOperations,
  selectors as authenticationSelectors,
} from '../Authentication/duck';
import ActivityRoomComponent from './ActivityRoomComponent';

export const mapStateToProps = (
  state,
  isActivityRoomDetaineesLoaded = selectors.isActivityRoomDetaineesLoadedState(state),
  usage = selectors.getActivityRoomUsageState(state),
  detainees = selectors.getActivityRoomDetaineesState(state),
  isAuthenticated = authenticationSelectors.isAuthenticatedState(state),
) => ({
  isActivityRoomDetaineesLoaded,
  usage,
  detainees,
  isAuthenticated,
});

export const mapDispatchToProps = (dispatch) => ({
  getActivityRoomDetainees: (
    usage,
    getActivityRoomDetainees = operations.getActivityRoomDetainees,
  ) => {
    dispatch(getActivityRoomDetainees(usage));
  },
  logOut: (usage, logOut = authenticationOperations.logOut) => {
    dispatch(logOut(usage));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivityRoomComponent);
