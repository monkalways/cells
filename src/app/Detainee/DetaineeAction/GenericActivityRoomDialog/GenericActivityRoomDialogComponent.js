import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
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
  onClose: PropTypes.func.isRequired,
  usage: PropTypes.string.isRequired,
};

const GenericActivityRoomDialogComponent = ({
  detainee,
  // isCheckingIn,
  isDialogOpen,
  // onCheckIn,
  onClose,
  usage,
}) => (
  <Dialog
    open={isDialogOpen}
    onClose={onClose}
    // disableBackdropClick={isCheckingIn}
    // disableEscapeKeyDown={isCheckingIn}
  >
    {/* Probably should make children here based on use cases
   1. *** This one - Medical, Fingerprinting, Telephone, Bail Hearing 1 and 2, Breath Test ***
   2. Not here - Interview
   3. Not here - Check back into cell
   4. Not here - Decline phone call
   5. Not here - Remand and Release Holding rooms
   Can do separate components or separate renderings. Components might be cleaner and make this file smaller. */}
    <DialogTitle>
      {`Moving ${detainee.lastName}, ${detainee.firstName} to ${usage}?`}
    </DialogTitle>
    {/* {isCheckingIn && (
      <DialogContent>
      <Loading size={50} />
      </DialogContent>
    )} */}
    {/* <DialogTitle>{`The ${usage} room is no longer available`}</DialogTitle>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Close
      </Button>
    </DialogActions> */}
    <DialogActions>
      <Button
        onClick={onClose}
        color="primary"
        // disabled={isCheckingIn}
      >
        Cancel
      </Button>
      <Button
        // onClick={onCheckIn}
        onClick={onClose}
        color="primary"
        variant="contained"
        autoFocus
        // disabled={isCheckingIn}
      >
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);

GenericActivityRoomDialogComponent.propTypes = propTypes;

export default GenericActivityRoomDialogComponent;
