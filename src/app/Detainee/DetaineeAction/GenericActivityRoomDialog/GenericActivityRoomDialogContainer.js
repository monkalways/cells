import { connect } from 'react-redux';
import { operations, selectors } from '../../duck';
import GenericActivityRoomDialogComponent from './GenericActivityRoomDialogComponent';

export const mapStateToProps = (
  state,
  { usage },
  room = selectors.getFirstAvailableActivityRoom(state, usage),
  isAnyRoomForGivenActivityAvailable = selectors.isAnyRoomForGivenActivityAvailableState(
    state,
    usage,
  ),
  isAssigningToRoom = selectors.isAssigningToRoomState(state),
) => ({
  room,
  isAnyRoomForGivenActivityAvailable,
  isAssigningToRoom,
});

export const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line max-len
  getAvailableActivityRooms: (getAvailableActivityRooms = operations.getAvailableActivityRooms) => dispatch(getAvailableActivityRooms()),
  assignDetaineeToRoom: (
    detainee,
    room,
    usage,
    assignDetaineeToRoom = operations.assignDetaineeToRoom,
  ) => dispatch(assignDetaineeToRoom(detainee, room, usage)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenericActivityRoomDialogComponent);
