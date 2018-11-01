import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Button, Toolbar, withStyles, Grid,
} from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onSignIn: PropTypes.func.isRequired,
};

const OverviewFooterComponent = ({ classes, isAuthenticated, onSignIn }) => (
  <div className={classes.root}>
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container>
          {isAuthenticated ? (
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                You are authenticated
              </Button>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() => onSignIn(true)}
              >
                Scan ID Card to Access
              </Button>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);

OverviewFooterComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#A8C6FA', // TODO: move color to theme
  },
  button: {
    margin: theme.spacing.unit,
    width: '100%',
  },
}))(OverviewFooterComponent);
