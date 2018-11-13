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

const CellDetaineeGridComponent = ({ classes, children }) => (
  <Grid container className={classes.container} spacing={8} justify="center">
    {children}
  </Grid>
);

CellDetaineeGridComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  container: {
    height: theme.spacing.unit * 97,
    overflowY: 'auto',
    msOverflowStyle: '-ms-autohiding-scrollbar',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: theme.spacing.unit * 0.4,
    backgroundColor: theme.palette.background.default,
    width: '100%',
  },
}))(CellDetaineeGridComponent);
