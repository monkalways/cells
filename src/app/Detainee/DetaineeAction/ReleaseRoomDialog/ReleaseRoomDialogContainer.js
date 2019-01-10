import { connect } from 'react-redux';
import { operations, selectors } from '../../duck';
import AutomaticRoomSelectionDialog from '../AutomaticRoomSelectionDialog';
import constants from '../../constants';

export const mapStateToProps = (
  state,
  areRoomsRefreshing = false, // *** fill this in
  currentRoom = selectors.getCurrentRoomState(state),
  destinationRoom = selectors.getFirstAvailableReleaseRoomState(state),
  isAnyRoomAvailable = selectors.isReleaseRoomOptionAvailableState(state),
  isAssigningToRoom = false, // *** fill this in
  usage = constants.RELEASE_ROOM,
) => ({
  areRoomsRefreshing,
  currentRoom,
  destinationRoom,
  isAnyRoomAvailable,
  isAssigningToRoom,
  usage,
});

export const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line max-len
  getAvailableRoomsRefresh: (getAvailableRoomsRefresh = operations.getAvailableReleaseRoomsRefresh) => {
    dispatch(getAvailableRoomsRefresh());
  },
  moveDetaineeToRoom: (
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
)(AutomaticRoomSelectionDialog);
