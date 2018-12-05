import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  Radio,
  RadioGroup,
  withStyles,
  Typography,
} from '@material-ui/core';
import classNames from 'classnames';

import Loading from '../../../common/Loading';

const propTypes = {
  areActivityRoomsRefreshing: PropTypes.bool.isRequired,
  availableRooms: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.shape({}).isRequired,
  currentRoom: PropTypes.string,
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
  usage: PropTypes.string.isRequired,
};

const defaultProps = {
  availableRooms: [],
  currentRoom: null,
};

class RoomSelectionDialogComponent extends Component {
  state = {
    value: null,
    userHasClicked: false,
  };

  handleConfirmClick = () => {
    const { detainee, currentRoom, moveDetaineeToActivityRoom } = this.props;
    const { value } = this.state;
    this.setState({ userHasClicked: true });
    if (value) {
      moveDetaineeToActivityRoom(detainee.id, currentRoom, value);
    }
  };

  handleOpen = () => {
    const { getAvailableActivityRoomsRefresh } = this.props;
    getAvailableActivityRoomsRefresh();
  };

  handleChange = (event) => {
    this.setState({ userHasClicked: true, value: event.target.value });
  };

  // Take this logic and convert it to a state variable
  isError = () => {
    const { value, userHasClicked } = this.state;
    return value === null && userHasClicked;
  };

  render() {
    const {
      areActivityRoomsRefreshing,
      availableRooms,
      classes,
      detainee,
      isAnyRoomForGivenActivityAvailable,
      isAssigningToRoom,
      isDialogOpen,
      onClose,
      usage,
    } = this.props;

    const { value } = this.state;

    return (
      <Dialog
        disableBackdropClick={isAssigningToRoom}
        disableEscapeKeyDown={isAssigningToRoom}
        open={isDialogOpen}
        onClose={onClose}
        onRendered={this.handleOpen}
      >
        {areActivityRoomsRefreshing ? (
          <React.Fragment>
            <DialogTitle>Searching for available room...</DialogTitle>
            <DialogContent>
              <Loading size={50} />
            </DialogContent>
          </React.Fragment>
        ) : isAnyRoomForGivenActivityAvailable ? (
          <React.Fragment>
            <DialogTitle>
              {`Please select ${usage} room for ${detainee.lastName}, ${
                detainee.firstName
              }:`}
            </DialogTitle>
            <DialogContent>
              {isAssigningToRoom ? (
                <Loading size={50} />
              ) : (
                <Grid container justify="center" alignItems="center">
                  <FormControl required component="fieldset">
                    <FormGroup>
                      <RadioGroup
                        name="availableRooms"
                        value={value}
                        onChange={this.handleChange}
                      >
                        {availableRooms.map((room) => (
                          <FormControlLabel
                            key={room}
                            value={room}
                            control={<Radio className={classes.radioButton} />}
                            label={<Typography variant="h6">{room}</Typography>}
                            disabled={isAssigningToRoom}
                          />
                        ))}
                      </RadioGroup>
                    </FormGroup>
                    <FormHelperText
                      error
                      className={classNames(classes.errorText, {
                        [classes.disabled]: !this.isError(),
                      })}
                    >
                      Please select a room
                    </FormHelperText>
                  </FormControl>
                </Grid>
              )}
            </DialogContent>
            <DialogActions>
              <Button
                onClick={onClose}
                color="primary"
                disabled={isAssigningToRoom}
              >
                Cancel
              </Button>
              <Button
                onClick={this.handleConfirmClick}
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
            <DialogTitle>{`Sorry, the room ${value} is no longer available.`}</DialogTitle>
            <DialogActions>
              <Button onClick={onClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </React.Fragment>
        )}
      </Dialog>
    );
  }
}

RoomSelectionDialogComponent.propTypes = propTypes;
RoomSelectionDialogComponent.defaultProps = defaultProps;

export default withStyles((theme) => ({
  disabled: {
    opacity: '0',
    marginBottom: theme.spacing.unit * -2.5,
  },
  errorText: {
    fontSize: theme.typography.h6.fontSize,
  },
  radioButton: {
    padding: theme.spacing.unit,
  },
}))(RoomSelectionDialogComponent);
