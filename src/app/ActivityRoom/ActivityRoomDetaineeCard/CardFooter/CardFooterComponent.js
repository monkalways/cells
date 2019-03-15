import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, CardActions, Typography, withStyles,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import CheckInDetaineeDialog from './CheckInDetaineeDialog';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    activityRoomName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isCheckingIn: PropTypes.bool.isRequired,
  isCheckingInSuccess: PropTypes.bool.isRequired,
  usage: PropTypes.string.isRequired,
  onCheckIn: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  checkingInDetaineeId: PropTypes.string,
};

const defaultProps = {
  checkingInDetaineeId: null,
};

const LOCATION_IN_TRANSIT = 'in transit';
const LOCATION_IN_PROGRESS = 'in progress';

export class CardFooterComponent extends Component {
  state = {
    isDialogOpen: false,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      isDialogOpen:
        nextProps.isCheckingIn
        && !nextProps.isCheckingInSuccess
        && nextProps.detainee.id === nextProps.checkingInDetaineeId,
    });
  }

  handleInButtonClick = () => {
    this.setState({
      isDialogOpen: true,
    });
  };

  handleOutButtonClick = () => {
    const { history, detainee, usage } = this.props;
    const first = 'activity-rooms';
    history.push(`/detainees/${detainee.id}?first=${first}&second=${usage}`);
  };

  handleClose = () => {
    this.setState({
      isDialogOpen: false,
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
            id="inButton"
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
            id="outButton"
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

  render() {
    const {
      classes,
      isAuthenticated,
      detainee,
      isCheckingIn,
      usage,
    } = this.props;
    const { isDialogOpen } = this.state;
    return (
      <CardActions className={classes.actions}>
        {isAuthenticated && (
          <React.Fragment>
            <Typography variant="h6" className={classes.heading}>
              {detainee.activityRoomName}
            </Typography>
            {this.renderButton()}
            <CheckInDetaineeDialog
              isDialogOpen={isDialogOpen}
              detainee={detainee}
              isCheckingIn={isCheckingIn}
              usage={usage}
              onClose={this.handleClose}
              onCheckIn={this.handleCheckIn}
            />
          </React.Fragment>
        )}
      </CardActions>
    );
  }
}

CardFooterComponent.propTypes = propTypes;
CardFooterComponent.defaultProps = defaultProps;

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
