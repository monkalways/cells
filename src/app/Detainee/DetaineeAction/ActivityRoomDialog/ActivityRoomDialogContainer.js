import { connect } from 'react-redux';
import { operations, selectors } from '../../duck';
import ActivityRoomDialogComponent from './ActivityRoomDialogComponent';

export const mapStateToProps = (
  state,
  { usage },
  areActivityRoomsRefreshing = selectors.areActivityRoomsRefreshingState(state),
  currentRoom = selectors.getCurrentRoomState(state),
  isAnyRoomForGivenActivityAvailable = selectors.isAnyRoomForGivenActivityAvailableState(
    state,
    usage,
  ),
  isAssigningToRoom = selectors.isAssigningToRoomState(state),
  destinationRoom = selectors.getFirstAvailableActivityRoom(state, usage),
) => ({
  areActivityRoomsRefreshing,
  currentRoom,
  isAnyRoomForGivenActivityAvailable,
  isAssigningToRoom,
  destinationRoom,
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
