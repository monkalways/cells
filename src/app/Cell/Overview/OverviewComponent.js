import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetainees: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const OverviewComponent = ({ classes, cellDetainees }) => (
  <Grid container justify="center" className={classes.container}>
    {cellDetainees.map((cellDetainee) => (
      <Grid key={cellDetainee.id} item sm={4}>
        <Typography variant="h6">
          {cellDetainee.firstName}
          {cellDetainee.lastName}
        </Typography>
      </Grid>
    ))}
  </Grid>
);

OverviewComponent.propTypes = propTypes;

export default withStyles(() => ({
  container: {},
}))(OverviewComponent);
