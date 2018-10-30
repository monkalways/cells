import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

import { LAYOUT } from '../../constants';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.shape({}).isRequired,
};

const Layout = ({ classes, children }) => (
  <Grid container justify="center">
    <Grid container className={classes.container}>
      <Grid item>{children}</Grid>
    </Grid>
  </Grid>
);

Layout.propTypes = propTypes;

export default withStyles((theme) => ({
  container: {
    height: LAYOUT.height,
    [theme.breakpoints.up('lg')]: {
      width: LAYOUT.width,
    },
  },
}))(Layout);
