import { connect } from 'react-redux';
import { selectors } from '../../duck';
import GenericActivityRoomDialogComponent from './GenericActivityRoomDialogComponent';

export const mapStateToProps = (
  state,
  { usage },
  isActivityRoomAvailable = selectors.isGenericActivityRoomAvailableState(
    state,
    usage,
  ),
) => ({
  isActivityRoomAvailable,
});

export default connect(
  mapStateToProps,
  null,
)(GenericActivityRoomDialogComponent);
