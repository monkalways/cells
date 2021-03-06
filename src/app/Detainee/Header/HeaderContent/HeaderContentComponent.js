import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    assignedCellName: PropTypes.string.isRequired,
  }).isRequired,
};

export const HeaderContentComponent = ({ classes, detainee }) => {
  const { assignedCellName } = detainee;
  return (
    <Grid container justify="center" className={classes.grid}>
      <Grid item sm={5}>
        <Typography variant="h4" className={classes.headerTitle}>
          Cell:
        </Typography>
        <Typography variant="h4" className={classes.headerContent}>
          {assignedCellName}
        </Typography>
      </Grid>
    </Grid>
  );
};

HeaderContentComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  headerTitle: {
    display: 'inline',
    color: 'red',
    marginRight: theme.spacing.unit,
  },
  headerContent: {
    display: 'inline',
  },
}))(HeaderContentComponent);
