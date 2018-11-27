import { connect } from 'react-redux';
import { operations, selectors } from '../../duck';
import ActivityRoomDialogComponent from './ActivityRoomDialogComponent';

export const mapStateToProps = (
  state,
  { usage },
  areActivityRoomsRefreshing = selectors.areActivityRoomsRefreshingState(state),
  currentActivity = selectors.getCurrentActivityRoomState(state),
  isAnyRoomForGivenActivityAvailable = selectors.isAnyRoomForGivenActivityAvailableState(
    state,
    usage,
  ),
  isAssigningToRoom = selectors.isAssigningToRoomState(state),
  destinationRoom = selectors.getFirstAvailableActivityRoom(state, usage),
) => ({
  areActivityRoomsRefreshing,
  currentActivity,
  isAnyRoomForGivenActivityAvailable,
  isAssigningToRoom,
  destinationRoom,
});

export const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line max-len
  getAvailableActivityRoomsRefresh: (getAvailableActivityRoomsRefresh = operations.getAvailableActivityRoomsRefresh) => dispatch(getAvailableActivityRoomsRefresh()),
  moveDetaineeToActivityRoom: (
    detaineeId,
    from,
    destinationRoom,
    moveDetaineeToActivityRoom = operations.moveDetaineeToActivityRoom,
  ) => dispatch(moveDetaineeToActivityRoom(detaineeId, from, destinationRoom)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivityRoomDialogComponent);
