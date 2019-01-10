import { connect } from 'react-redux';
import { operations, selectors } from '../../duck';
import AutomaticRoomSelectionDialog from '../AutomaticRoomSelectionDialog';

export const mapStateToProps = (
  state,
  { usage },
  areRoomsRefreshing = selectors.areActivityRoomsRefreshingState(state),
  currentRoom = selectors.getCurrentRoomState(state),
  destinationRoom = selectors.getFirstAvailableActivityRoomState(state, usage),
  isAnyRoomAvailable = selectors.isAnyRoomForGivenActivityAvailableState(
    state,
    usage,
  ),
  isAssigningToRoom = selectors.isAssigningToRoomState(state),
) => ({
  areRoomsRefreshing,
  currentRoom,
  destinationRoom,
  isAnyRoomAvailable,
  isAssigningToRoom,
});

export const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line max-len
  getAvailableRoomsRefresh: (getAvailableActivityRoomsRefresh = operations.getAvailableActivityRoomsRefresh) => {
    dispatch(getAvailableActivityRoomsRefresh());
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
