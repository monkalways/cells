import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  // detainees: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const MealComponent = ({ classes }) => (
  <div className={classes.container}>Meal</div>
);

MealComponent.propTypes = propTypes;

export default withStyles(() => ({
  container: {},
}))(MealComponent);
