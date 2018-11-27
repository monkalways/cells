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
  areActivityRoomsRefreshing: PropTypes.bool.isRequired,
  currentActivity: PropTypes.string.isRequired,
  detainee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  getAvailableActivityRoomsRefresh: PropTypes.func.isRequired,
  isAnyRoomForGivenActivityAvailable: PropTypes.bool.isRequired,
  isDialogOpen: PropTypes.bool.isRequired,
  isAssigningToRoom: PropTypes.bool.isRequired,
  moveDetaineeToActivityRoom: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  destinationRoom: PropTypes.string,
  usage: PropTypes.string.isRequired,
};

const defaultProps = {
  destinationRoom: null,
};

const ActivityRoomDialogComponent = ({
  areActivityRoomsRefreshing,
  currentActivity,
  detainee,
  getAvailableActivityRoomsRefresh,
  isAnyRoomForGivenActivityAvailable,
  isAssigningToRoom,
  isDialogOpen,
  moveDetaineeToActivityRoom,
  onClose,
  destinationRoom,
  usage,
}) => {
  const handleClick = () => {
    moveDetaineeToActivityRoom(detainee.id, currentActivity, destinationRoom);
  };

  const handleOpen = () => {
    getAvailableActivityRoomsRefresh();
  };

  return (
    <Dialog
      disableBackdropClick={isAssigningToRoom}
      disableEscapeKeyDown={isAssigningToRoom}
      open={isDialogOpen}
      onClose={onClose}
      onRendered={handleOpen}
    >
      {/** * Medical, Fingerprinting, Telephone, Bail Hearing 1 and 2, Breath Test ** */}
      {areActivityRoomsRefreshing ? (
        <React.Fragment>
          <DialogTitle>{`Searching for available ${usage} room...`}</DialogTitle>
          <DialogContent>
            <Loading size={50} />
          </DialogContent>
        </React.Fragment>
      ) : isAnyRoomForGivenActivityAvailable ? (
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
      ) : (
        <React.Fragment>
          <DialogTitle>{`Sorry, the ${usage} room is no longer available.`}</DialogTitle>
          <DialogActions>
            <Button onClick={onClose} color="primary">
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
