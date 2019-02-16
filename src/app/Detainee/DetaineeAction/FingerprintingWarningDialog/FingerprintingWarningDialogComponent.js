import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dialog, DialogActions, DialogTitle,
} from '@material-ui/core';

const propTypes = {
  isDialogOpen: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleIgnore: PropTypes.func.isRequired,
};

const FingerprintingWarningDialogComponent = ({
  isDialogOpen,
  handleCancel,
  handleClose,
  handleIgnore,
}) => (
  <Dialog open={isDialogOpen} onClose={handleClose}>
    <React.Fragment>
      <DialogTitle>
        {'Warning: Fingerprinting has not been completed.'}
      </DialogTitle>

      <DialogActions>
        <Button id="cancelButton" onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button
          id="ignoreButton"
          onClick={handleIgnore}
          color="primary"
          variant="contained"
          autoFocus
        >
          Ignore
        </Button>
      </DialogActions>
    </React.Fragment>
  </Dialog>
);
FingerprintingWarningDialogComponent.propTypes = propTypes;

export default FingerprintingWarningDialogComponent;
