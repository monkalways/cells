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
  areRoomsRefreshing: PropTypes.bool.isRequired,
  currentRoom: PropTypes.string,
  destinationRoom: PropTypes.string,
  detainee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  getAvailableRoomsRefresh: PropTypes.func.isRequired,
  isAnyRoomAvailable: PropTypes.bool.isRequired,
  isDialogOpen: PropTypes.bool.isRequired,
  isAssigningToRoom: PropTypes.bool.isRequired,
  moveDetaineeToRoom: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  usage: PropTypes.string.isRequired,
};

const defaultProps = {
  currentRoom: null,
  destinationRoom: null,
};

const ActivityRoomDialogComponent = ({
  areRoomsRefreshing,
  currentRoom,
  destinationRoom,
  detainee,
  getAvailableRoomsRefresh,
  isAnyRoomAvailable,
  isAssigningToRoom,
  isDialogOpen,
  moveDetaineeToRoom,
  onClose,
  usage,
}) => {
  const handleClick = () => {
    moveDetaineeToRoom(detainee.id, currentRoom, destinationRoom);
  };

  const handleOpen = () => {
    getAvailableRoomsRefresh();
  };

  return (
    <Dialog
      disableBackdropClick={isAssigningToRoom}
      disableEscapeKeyDown={isAssigningToRoom}
      open={isDialogOpen}
      onClose={onClose}
      onRendered={handleOpen}
    >
      {areRoomsRefreshing ? (
        <React.Fragment>
          <DialogTitle>{`Searching for available ${usage} room...`}</DialogTitle>
          <DialogContent>
            <Loading size={50} />
          </DialogContent>
        </React.Fragment>
      ) : isAnyRoomAvailable ? (
        <React.Fragment>
          <DialogTitle>
            {`Moving ${detainee.lastName}, ${
              detainee.firstName
            } to ${usage} room ${destinationRoom}?`}
          </DialogTitle>
          {isAssigningToRoom && (
            <DialogContent>
              <Loading size={50} />
            </DialogContent>
          )}
          <DialogActions>
            <Button
              id="cancelButton"
              onClick={onClose}
              color="primary"
              disabled={isAssigningToRoom}
            >
              Cancel
            </Button>
            <Button
              id="confirmButton"
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
      ) : (
        <React.Fragment>
          <DialogTitle>{`Sorry, the ${usage} room ${destinationRoom} is no longer available.`}</DialogTitle>
          <DialogActions>
            <Button id="closeButton" onClick={onClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </React.Fragment>
      )}
    </Dialog>
  );
};

ActivityRoomDialogComponent.propTypes = propTypes;
ActivityRoomDialogComponent.defaultProps = defaultProps;

export default ActivityRoomDialogComponent;
