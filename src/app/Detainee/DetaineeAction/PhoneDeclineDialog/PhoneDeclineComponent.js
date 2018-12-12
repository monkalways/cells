import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

import Loading from '../../../common/Loading';

const propTypes = {
  cellName: PropTypes.string,
  detainee: PropTypes.shape({
    arrestId: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  isDialogOpen: PropTypes.bool.isRequired,
  isUpdatingDetentionLog: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  savePhoneCallDecline: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

const defaultProps = {
  cellName: null,
  userName: null,
};

const PhoneDeclineComponent = ({
  cellName,
  detainee,
  isDialogOpen,
  isUpdatingDetentionLog,
  onClose,
  savePhoneCallDecline,
  userName,
}) => {
  const handleClick = () => {
    const { arrestId } = detainee;
    savePhoneCallDecline(arrestId, cellName, userName);
  };

  return (
    <Dialog
      disableBackdropClick={isUpdatingDetentionLog}
      disableEscapeKeyDown={isUpdatingDetentionLog}
      open={isDialogOpen}
      onClose={onClose}
    >
      <React.Fragment>
        <DialogTitle>
          {`Record that ${detainee.lastName}, ${
            detainee.firstName
          } declined a phone call?`}
        </DialogTitle>
        {isUpdatingDetentionLog && (
          <DialogContent>
            <Loading size={50} />
          </DialogContent>
        )}
        <DialogActions>
          <Button
            id="cancelButton"
            onClick={onClose}
            color="primary"
            disabled={isUpdatingDetentionLog}
          >
            Cancel
          </Button>
          <Button
            id="confirmButton"
            onClick={handleClick}
            color="primary"
            variant="contained"
            autoFocus
            disabled={isUpdatingDetentionLog}
          >
            Confirm
          </Button>
        </DialogActions>
      </React.Fragment>
    </Dialog>
  );
};

PhoneDeclineComponent.propTypes = propTypes;
PhoneDeclineComponent.defaultProps = defaultProps;

export default PhoneDeclineComponent;
