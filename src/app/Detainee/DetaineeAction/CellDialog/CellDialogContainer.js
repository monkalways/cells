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
    originRoom,
    destinationRoom,
    moveDetaineeToCell = operations.moveDetaineeToRoom,
  ) => dispatch(moveDetaineeToCell(detaineeId, originRoom, destinationRoom)),
  // eslint-disable-next-line max-len
  checkDetaineeInToCell: (detaineeId, cellName) => dispatch(operations.checkDetaineeInToCell(detaineeId, cellName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CellDialogComponent);
