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
  isActivityRoomAvailable: PropTypes.bool.isRequired,
  isDialogOpen: PropTypes.bool.isRequired,
  // isCheckingIn: PropTypes.bool.isRequired,
  // onCheckIn: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  usage: PropTypes.string.isRequired,
};

const GenericActivityRoomDialogComponent = ({
  isActivityRoomAvailable,
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
    {/** * Medical, Fingerprinting, Telephone, Bail Hearing 1 and 2, Breath Test ** */}
    {isActivityRoomAvailable ? (
      <React.Fragment>
        <DialogTitle>
          {`Moving ${detainee.lastName}, ${detainee.firstName} to ${usage}?`}
        </DialogTitle>
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
      </React.Fragment>
    ) : (
      <React.Fragment>
        <DialogTitle>{`The ${usage} room is no longer available`}</DialogTitle>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </React.Fragment>
    )}
    {/* {isCheckingIn && (
      <DialogContent>
      <Loading size={50} />
      </DialogContent>
    )} */}
  </Dialog>
);

GenericActivityRoomDialogComponent.propTypes = propTypes;

export default GenericActivityRoomDialogComponent;
