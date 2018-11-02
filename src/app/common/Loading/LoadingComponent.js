import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, withStyles } from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
};
const LoadingComponent = ({ classes }) => (
  <div className={classes.container}>
    <CircularProgress className={classes.progress} size={100} />
  </div>
);

LoadingComponent.propTypes = propTypes;

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
