import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

import constants from '../../constants';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const Layout = ({ classes, children }) => (
  <Grid container justify="center">
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  </Grid>
);

Layout.propTypes = propTypes;

export default withStyles((theme) => ({
  container: {
    height: constants.LAYOUT.height,
    [theme.breakpoints.up('lg')]: {
      width: constants.LAYOUT.width,
    },
  },
}))(Layout);
