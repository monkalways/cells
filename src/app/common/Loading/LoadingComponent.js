import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, withStyles } from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  size: PropTypes.number,
};

const defaultProps = {
  size: 100,
};

const LoadingComponent = ({ classes, size }) => (
  <div className={classes.container}>
    <CircularProgress className={classes.progress} size={size} />
  </div>
);

LoadingComponent.propTypes = propTypes;
LoadingComponent.defaultProps = defaultProps;

export default withStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
}))(LoadingComponent);
