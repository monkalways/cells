import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';

import Loading from '../../../common/Loading';
import constants from '../../constants';

const propTypes = {
  checkDetaineeInToCell: PropTypes.func.isRequired,
  currentActivity: PropTypes.string.isRequired,
  detainee: PropTypes.shape({
    assignedCellName: PropTypes.string.isRequired,
    currentActivityRoom: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  isDialogOpen: PropTypes.bool.isRequired,
  isAssigningToRoom: PropTypes.bool.isRequired,
  moveDetaineeToCell: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const defaultProps = {};

const CellDialogComponent = ({
  checkDetaineeInToCell,
  currentActivity,
  detainee,
  isAssigningToRoom,
  isDialogOpen,
  moveDetaineeToCell,
  onClose,
}) => {
  const handleClick = () => {
    const { id, currentActivityRoom, assignedCellName } = detainee;
    if (currentActivity === constants.CELL) checkDetaineeInToCell(id, assignedCellName);
    else moveDetaineeToCell(id, currentActivityRoom, assignedCellName);
  };

  return (
    <Dialog
      disableBackdropClick={isAssigningToRoom}
      disableEscapeKeyDown={isAssigningToRoom}
      open={isDialogOpen}
      onClose={onClose}
    >
      <React.Fragment>
        {currentActivity === constants.CELL ? (
          <DialogTitle disableTypography>
            <Typography variant="h6" align="center">
              {`Placing ${detainee.lastName}, ${detainee.firstName} in Cell ${
                detainee.assignedCellName
              }.`}
            </Typography>
            <Typography variant="h6" align="center">
              Proceed with Action?
            </Typography>
          </DialogTitle>
        ) : (
          // <DialogTitle>
          //   {`Placing ${detainee.lastName}, ${detainee.firstName} in Cell ${
          //     detainee.assignedCellName
          //   }. Proceed with action?`}
          // </DialogTitle>
          <DialogTitle>
            {`Moving ${detainee.lastName}, ${detainee.firstName} to Cell ${
              detainee.assignedCellName
            }?`}
          </DialogTitle>
        )}
        {isAssigningToRoom && (
          <DialogContent>
            <Loading size={50} />
          </DialogContent>
        )}
        <DialogActions>
          <Button
            onClick={onClose}
            color="primary"
            disabled={isAssigningToRoom}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClick}
            color="primary"
            variant="contained"
            autoFocus
            disabled={isAssigningToRoom}
          >
            Confirm
          </Button>
        </DialogActions>
      </React.Fragment>
    </Dialog>
  );
};

CellDialogComponent.propTypes = propTypes;
CellDialogComponent.defaultProps = defaultProps;

export default CellDialogComponent;
