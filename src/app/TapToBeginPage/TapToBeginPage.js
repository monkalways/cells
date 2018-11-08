import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import constants from '../constants';
import logo from './EPSlogo.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const TapToBeginPage = ({ classes, history, match }) => {
  const handleClick = () => {
    const { name } = match.params;
    history.push(`/cells/${name}/home`);
  };
  return (
    <Grid container justify="center">
      <Grid
        container
        className={classes.container}
        alignItems="center"
        justify="center"
        onClick={handleClick}
      >
        <Grid item>
          <img src={logo} alt="EPS Logo" width={350} />
          <Typography variant="h4" className={classes.heading} align="center">
            Tap to begin
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

TapToBeginPage.propTypes = propTypes;

export default compose(
  withStyles(() => ({
    container: {
      height: constants.LAYOUT.height,
      background: '#3D89F7',
      width: constants.LAYOUT.width,
      cursor: 'pointer',
    },
    heading: {
      marginTop: 20,
      color: '#FFFFFF',
    },
  })),
  withRouter,
)(TapToBeginPage);
