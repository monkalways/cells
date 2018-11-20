import { connect } from 'react-redux';
import { selectors } from '../../duck';
import GenericActivityRoomDialogComponent from './GenericActivityRoomDialogComponent';

export const mapStateToProps = (
  state,
  { usage },
  getFirstAvailableActivityRoom = selectors.getFirstAvailableActivityRoom(
    state,
    usage,
  ),
  isActivityRoomAvailable = selectors.isGenericActivityRoomAvailableState(
    state,
    usage,
  ),
) => ({
  getFirstAvailableActivityRoom,
  isActivityRoomAvailable,
});

export default connect(
  mapStateToProps,
  null,
)(GenericActivityRoomDialogComponent);
