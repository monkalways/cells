import { connect } from 'react-redux';
import { operations, selectors } from '../../duck';
import ActivityRoomDialogComponent from './ActivityRoomDialogComponent';

export const mapStateToProps = (
  state,
  { usage },
  areActivityRoomsRefreshing = selectors.areActivityRoomsRefreshingState(state),
  currentRoom = selectors.getCurrentRoomState(state),
  destinationRoom = selectors.getFirstAvailableActivityRoomState(state, usage),
  isAnyRoomForGivenActivityAvailable = selectors.isAnyRoomForGivenActivityAvailableState(
    state,
    usage,
  ),
  isAssigningToRoom = selectors.isAssigningToRoomState(state),
) => ({
  areActivityRoomsRefreshing,
  currentRoom,
  destinationRoom,
  isAnyRoomForGivenActivityAvailable,
  isAssigningToRoom,
});

export const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line max-len
  getAvailableActivityRoomsRefresh: (getAvailableActivityRoomsRefresh = operations.getAvailableActivityRoomsRefresh) => dispatch(getAvailableActivityRoomsRefresh()),
  moveDetaineeToActivityRoom: (
    detaineeId,
    originRoom,
    destinationRoom,
    moveDetaineeToActivityRoom = operations.moveDetaineeToRoom,
  ) => dispatch(moveDetaineeToActivityRoom(detaineeId, originRoom, destinationRoom)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivityRoomDialogComponent);
