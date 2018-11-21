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
  assignDetaineeToRoom: PropTypes.func.isRequired,
  detainee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  isAnyRoomForGivenActivityAvailable: PropTypes.bool.isRequired,
  isDialogOpen: PropTypes.bool.isRequired,
  isAssigningToRoom: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  room: PropTypes.string,
  usage: PropTypes.string.isRequired,
};

const defaultProps = {
  room: null,
};

const GenericActivityRoomDialogComponent = ({
  assignDetaineeToRoom,
  detainee,
  isAnyRoomForGivenActivityAvailable,
  isAssigningToRoom,
  isDialogOpen,
  onClose,
  room,
  usage,
}) => (
  <Dialog
    open={isDialogOpen}
    onClose={onClose}
    disableBackdropClick={isAssigningToRoom}
    disableEscapeKeyDown={isAssigningToRoom}
  >
    {/** * Medical, Fingerprinting, Telephone, Bail Hearing 1 and 2, Breath Test ** */}
    {isAnyRoomForGivenActivityAvailable ? (
      <React.Fragment>
        <DialogTitle>
          {`Moving ${detainee.lastName}, ${
            detainee.firstName
          } to ${usage} room ${room}?`}
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
            // onClick={onCheckIn}
            onClick={() => {
              assignDetaineeToRoom(detainee, room, usage);
            }}
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
        <DialogTitle>{`The ${usage} room is no longer available`}</DialogTitle>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </React.Fragment>
    )}
  </Dialog>
);

GenericActivityRoomDialogComponent.propTypes = propTypes;
GenericActivityRoomDialogComponent.defaultProps = defaultProps;

export default GenericActivityRoomDialogComponent;
