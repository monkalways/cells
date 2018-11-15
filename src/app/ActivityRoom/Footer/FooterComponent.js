import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Button, Grid, withStyles,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import ScanCardDialog from '../../common/ScanCardDialog';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onSignIn: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const FooterComponent = ({ classes, isAuthenticated, onSignIn }) => (
  <div className={classes.root}>
    <AppBar position="static" className={classes.appBar}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        {!isAuthenticated && (
          <React.Fragment>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => onSignIn()}
            >
              Scan ID Card to Access
            </Button>
            <ScanCardDialog />
          </React.Fragment>
        )}
      </Grid>
    </AppBar>
  </div>
);

FooterComponent.propTypes = propTypes;

export default compose(
  withStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.background.default,
      height: 89,
    },
    button: {
      height: theme.spacing.unit * 7,
      width: theme.spacing.unit * 40,
      margin: theme.spacing.unit * 2,
    },
  })),
  withRouter,
)(FooterComponent);
