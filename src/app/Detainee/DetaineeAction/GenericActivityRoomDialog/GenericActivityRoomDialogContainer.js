import { connect } from 'react-redux';
import { operations, selectors } from '../../duck';
import GenericActivityRoomDialogComponent from './GenericActivityRoomDialogComponent';

export const mapStateToProps = (
  state,
  { usage },
  currentActivityRoom = selectors.getCurrentActivityRoomState(state),
  isAnyRoomForGivenActivityAvailable = selectors.isAnyRoomForGivenActivityAvailableState(
    state,
    usage,
  ),
  isAssigningToRoom = selectors.isAssigningToRoomState(state),
  room = selectors.getFirstAvailableActivityRoom(state, usage),
) => ({
  currentActivityRoom,
  isAnyRoomForGivenActivityAvailable,
  isAssigningToRoom,
  room,
});

export const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line max-len
  getAvailableActivityRooms: (getAvailableActivityRooms = operations.getAvailableActivityRooms) => dispatch(getAvailableActivityRooms()),
  moveDetaineeToRoomFromUsage: (
    detaineeId,
    room,
    usage,
    moveDetaineeToRoomFromUsage = operations.moveDetaineeToRoomFromUsage,
  ) => dispatch(moveDetaineeToRoomFromUsage(detaineeId, room, usage)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenericActivityRoomDialogComponent);
