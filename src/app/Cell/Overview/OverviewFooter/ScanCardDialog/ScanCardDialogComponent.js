import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  withStyles,
} from '@material-ui/core';

import commonConstants from '../../../../constants';
import Loading from '../../../../common/Loading';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isSignInDialogOpen: PropTypes.bool.isRequired,
  isAuthenticating: PropTypes.bool.isRequired,
  isAuthenticationFailed: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  authenticate: PropTypes.func.isRequired,
};

class ScanCardDialogComponent extends Component {
  state = {
    cardId: '',
  };

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown = (event) => {
    const { authenticate } = this.props;
    let { cardId } = this.state;
    cardId += event.key;
    this.setState({
      cardId,
    });

    if (cardId.length === commonConstants.SCAN_CARD_ID_LENGTH) {
      authenticate(cardId);
      this.setState({
        cardId: '',
      });
    }
  };

  handleFakeUserClick = () => {
    const { authenticate } = this.props;
    authenticate('b5a3d600f8ff12e0');
  };

  render() {
    const {
      classes,
      isSignInDialogOpen,
      isAuthenticating,
      isAuthenticationFailed,
      onClose,
    } = this.props;
    return (
      <Dialog open={isSignInDialogOpen} onClose={onClose}>
        <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
        <DialogContent className={classes.dialog}>
          {isAuthenticating ? (
            <Loading size={50} />
          ) : isAuthenticationFailed ? (
            <DialogContentText id="alert-dialog-description" variant="body1">
              Authentication Failed
            </DialogContentText>
          ) : (
            <DialogContentText id="alert-dialog-description" variant="body1">
              Please scan your ID card to proceed ...
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          {
            // TODO: Remove the "Proceed with Test Account" button
          }
          <Button
            onClick={this.handleFakeUserClick}
            color="secondary"
            autoFocus
          >
            Proceed with Test Account
          </Button>
          <Button onClick={onClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ScanCardDialogComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  dialog: {
    width: theme.spacing.unit * 50,
  },
}))(ScanCardDialogComponent);
