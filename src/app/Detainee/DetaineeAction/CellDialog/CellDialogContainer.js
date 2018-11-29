import { connect } from 'react-redux';
import { operations, selectors } from '../../duck';
import CellDialogComponent from './CellDialogComponent';

export const mapStateToProps = (
  state,
  currentActivity = selectors.getCurrentActivityRoomState(state),
  isAssigningToRoom = selectors.isAssigningToRoomState(state),
) => ({
  currentActivity,
  isAssigningToRoom,
});

export const mapDispatchToProps = (dispatch) => ({
  moveDetaineeToCell: (
    detaineeId,
    from,
    destinationRoom,
    moveDetaineeToCell = operations.moveDetaineeToCell,
  ) => dispatch(moveDetaineeToCell(detaineeId, from, destinationRoom)),
  checkDetaineeInToCell: (detaineeId) => dispatch(operations.checkDetaineeInToCell(detaineeId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CellDialogComponent);
