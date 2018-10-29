import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';
import logo from './EPSlogo.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const TapToBeginPage = ({ classes }) => (
  <Grid container justify="center">
    <Grid
      container
      className={classes.container}
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <img src={logo} alt="EPS Logo" width={200} />
        <br />
        <br />
        <Typography variant="h4">Tap to begin</Typography>
      </Grid>
    </Grid>
  </Grid>
);

TapToBeginPage.propTypes = propTypes;

export default withStyles((theme) => ({
  container: {
    height: 720,
    background: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      width: 1280,
    },
  },
}))(TapToBeginPage);
