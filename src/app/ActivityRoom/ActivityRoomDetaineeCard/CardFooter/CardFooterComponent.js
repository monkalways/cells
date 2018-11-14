import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  withStyles,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Loading from '../../../common/Loading';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    activityRoomName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isCheckingIn: PropTypes.bool.isRequired,
  usage: PropTypes.string.isRequired,
  onCheckIn: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const LOCATION_IN_TRANSIT = 'in transit';
const LOCATION_IN_PROGRESS = 'in progress';

class CardFooterComponent extends Component {
  state = {
    dialogOpen: false,
  };

  handleInButtonClick = () => {
    this.setState({
      dialogOpen: true,
    });
  };

  handleOutButtonClick = () => {
    const { history, detainee, usage } = this.props;
    const first = 'activity-rooms';
    history.push(`/detainees/${detainee.id}?first=${first}&second=${usage}`);
  };

  handleClose = () => {
    this.setState({
      dialogOpen: false,
    });
  };

  handleCheckIn = () => {
    const { onCheckIn, detainee, usage } = this.props;
    onCheckIn(detainee.id, usage);
  };

  renderButton = () => {
    const { detainee, classes } = this.props;
    const { location } = detainee;
    if (location) {
      if (location.toLowerCase().includes(LOCATION_IN_TRANSIT)) {
        return (
          <Button
            variant="contained"
            size="large"
            className={classes.inButton}
            onClick={this.handleInButtonClick}
          >
            IN
          </Button>
        );
      }
      if (location.toLowerCase().includes(LOCATION_IN_PROGRESS)) {
        return (
          <Button
            variant="contained"
            size="large"
            className={classes.outButton}
            onClick={this.handleOutButtonClick}
          >
            OUT
          </Button>
        );
      }
    }
    return null;
  };

  // TODO: refactor this into separate component
  renderDialog = () => {
    const { detainee, isCheckingIn } = this.props;
    const { dialogOpen } = this.state;
    return (
      <Dialog
        open={dialogOpen}
        onClose={this.handleClose}
        disableBackdropClick={isCheckingIn}
        disableEscapeKeyDown={isCheckingIn}
      >
        <DialogTitle>
          {`Placing ${detainee.lastName}, ${detainee.firstName} in phone room ${
            detainee.activityRoomName
          }?`}
        </DialogTitle>
        {isCheckingIn && (
          <DialogContent>
            <Loading size={50} />
          </DialogContent>
        )}
        <DialogActions>
          <Button
            onClick={this.handleClose}
            color="primary"
            disabled={isCheckingIn}
          >
            Cancel
          </Button>
          <Button
            onClick={this.handleCheckIn}
            color="primary"
            variant="contained"
            autoFocus
            disabled={isCheckingIn}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  render() {
    const { classes, isAuthenticated, detainee } = this.props;
    return (
      <CardActions className={classes.actions}>
        {isAuthenticated && (
          <React.Fragment>
            <Typography variant="h6" className={classes.heading}>
              {detainee.activityRoomName}
            </Typography>
            {this.renderButton()}
            {this.renderDialog()}
          </React.Fragment>
        )}
      </CardActions>
    );
  }
}

CardFooterComponent.propTypes = propTypes;

export default compose(
  withStyles((theme) => ({
    actions: {
      display: 'flex',
      height: theme.spacing.unit * 9,
    },
    heading: {
      width: theme.spacing.unit * 8,
      marginRight: theme.spacing.unit * 4,
    },
    inButton: {
      backgroundColor: '#2895F2',
      color: '#FFFFFF',
      fontSize: theme.typography.h6.fontSize,
      '&:hover': {
        backgroundColor: '#0E47A1',
      },
    },
    outButton: {
      backgroundColor: '#558A3A',
      color: '#FFFFFF',
      fontSize: theme.typography.h6.fontSize,
      '&:hover': {
        backgroundColor: '#456336',
      },
    },
  })),
  withRouter,
)(CardFooterComponent);
