import React from 'react';
import PropTypes from 'prop-types';
import {
  // Button,
  Dialog,
  DialogActions,
  // DialogContent,
  DialogTitle,
} from '@material-ui/core';

// import Loading from '../../../common/Loading';

const propTypes = {
  detainee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  isDialogOpen: PropTypes.bool.isRequired,
  // isCheckingIn: PropTypes.bool.isRequired,
  // onCheckIn: PropTypes.func.isRequired,
  // onClose: PropTypes.func.isRequired,
};

const CheckInDetaineeDialogComponent = ({
  detainee,
  // isCheckingIn,
  isDialogOpen,
  // onCheckIn,
  // onClose,
  // usage
}) => (
  <Dialog
    open={isDialogOpen}
    // onClose={onClose}
    // disableBackdropClick={isCheckingIn}
    // disableEscapeKeyDown={isCheckingIn}
  >
    <DialogTitle>
      {`Placing ${detainee.lastName}, ${detainee.firstName} in 'usage' ${
        detainee.activityRoomName
      }?`}
    </DialogTitle>
    {/* {isCheckingIn && (
      <DialogContent>
        <Loading size={50} />
      </DialogContent>
    )} */}
    <DialogActions>
      {/* <Button onClick={onClose} color="primary" disabled={isCheckingIn}>
        Cancel
      </Button>
      <Button
        onClick={onCheckIn}
        color="primary"
        variant="contained"
        autoFocus
        disabled={isCheckingIn}
      >
        Confirm
      </Button> */}
    </DialogActions>
  </Dialog>
);

CheckInDetaineeDialogComponent.propTypes = propTypes;

export default CheckInDetaineeDialogComponent;
