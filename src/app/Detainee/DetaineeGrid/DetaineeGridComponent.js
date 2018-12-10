import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export const DetaineeGridComponent = ({ classes, children }) => (
  <Grid container className={classes.container} spacing={8}>
    {children}
  </Grid>
);

DetaineeGridComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    height: theme.spacing.unit * 113,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: theme.spacing.unit * 0.4,
    padding: theme.spacing.unit,
    width: '100%',
  },
}))(DetaineeGridComponent);
