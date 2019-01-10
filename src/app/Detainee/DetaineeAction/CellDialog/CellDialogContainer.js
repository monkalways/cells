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
    goBack,
    moveDetaineeToCell = operations.moveDetaineeToRoom,
  ) => dispatch(moveDetaineeToCell(detaineeId, originRoom, destinationRoom, goBack)),
  checkDetaineeInToCell: (
    detaineeId,
    cellName,
    goBack,
    checkDetaineeInToCell = operations.checkDetaineeInToCell,
  ) => dispatch(checkDetaineeInToCell(detaineeId, cellName, goBack)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CellDialogComponent);
