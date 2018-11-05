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
  <Grid container className={classes.container} spacing={8}>
    {children}
  </Grid>
);

CellDetaineeGridComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  container: {
    backgroundColor: '#A8C6FA', // TODO: move color to theme
    height: theme.spacing.unit * 97,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: theme.spacing.unit * 0.4,
    padding: theme.spacing.unit,
    width: '100%',
  },
}))(CellDetaineeGridComponent);
