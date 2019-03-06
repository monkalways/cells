import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';

import Loading from '../../common/Loading';

const propTypes = {
  cellDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  isLoadingReport: PropTypes.bool.isRequired,
  handleLoadReport: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

const CellHistoryReportModalComponent = ({
  cellDetails,
  isModalOpen,
  isLoadingReport,
  handleLoadReport,
  handleCloseModal,
}) => {
  const handleClose = () => {
    handleCloseModal();
  };
  const handleConfirm = () => {
    handleLoadReport();
  };
  return (
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
      disableBackdropClick={isLoadingReport}
      disableEscapeKeyDown={isLoadingReport}
    >
      <DialogTitle>{`Cell History Report - ${cellDetails.name}`}</DialogTitle>
      {isLoadingReport ? (
        <DialogContent>
          <Loading size={50} />
        </DialogContent>
      ) : (
        <DialogContent>
          <DialogContentText>
            Please specify start and end times.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
      )}
      <DialogActions>
        <Button
          id="cancelButton"
          onClick={handleClose}
          color="primary"
          disabled={isLoadingReport}
        >
          Cancel
        </Button>
        <Button
          id="loadReportButton"
          onClick={handleConfirm}
          color="primary"
          variant="contained"
          autoFocus
          disabled={isLoadingReport}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CellHistoryReportModalComponent.propTypes = propTypes;

export default CellHistoryReportModalComponent;
