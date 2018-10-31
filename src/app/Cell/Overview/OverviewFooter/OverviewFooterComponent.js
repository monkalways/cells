import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Button, Toolbar, withStyles, Grid,
} from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Scan ID Card to Access
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = propTypes;

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
}))(Header);
