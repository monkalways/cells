import { connect } from 'react-redux';
import { operations, selectors } from '../../duck';
import RoomSelectionDialogComponent from './RoomSelectionDialogComponent';

export const mapStateToProps = (
  state,
  { usage },
  areActivityRoomsRefreshing = selectors.areActivityRoomsRefreshingState(state),
  availableRooms = selectors.getAllAvailableActivityRoomsState(state, usage),
  currentRoom = selectors.getCurrentRoomState(state),
  isAnyRoomForGivenActivityAvailable = selectors.isAnyRoomForGivenActivityAvailableState(
    state,
    usage,
  ),
  isAssigningToRoom = selectors.isAssigningToRoomState(state),
) => ({
  areActivityRoomsRefreshing,
  availableRooms,
  currentRoom,
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
    goBack,
    moveDetaineeToActivityRoom = operations.moveDetaineeToRoom,
  ) => dispatch(moveDetaineeToActivityRoom(
    detaineeId,
    originRoom,
    destinationRoom,
    goBack,
  )),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoomSelectionDialogComponent);
