import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genderLabel: PropTypes.string.isRequired,
    occupancy: PropTypes.number.isRequired,
    occupancyCount: PropTypes.number.isRequired,
    cellStatus: PropTypes.string.isRequired,
  }).isRequired,
};

const HeaderContent = ({ classes, cellDetails }) => (
  <Grid container justify="center" className={classes.grid}>
    <Grid container alignItems="center" justify="center">
      <Grid item sm={5}>
        <Typography variant="h6" className={classes.headerTitle}>
          Cell:
        </Typography>
        <Typography variant="h4" className={classes.headerContent}>
          {cellDetails.name}
        </Typography>
      </Grid>
      <Grid item sm={7}>
        <Typography variant="h6" className={classes.headerTitle}>
          Designation:
        </Typography>
        <Typography variant="h6" className={classes.headerContent}>
          {cellDetails.genderLabel}
        </Typography>
      </Grid>
      <Grid item sm={5}>
        <Typography variant="h6" className={classes.headerTitle}>
          Occupancy:
        </Typography>
        <Typography variant="h6" className={classes.headerContent}>
          {cellDetails.occupancyCount}/{cellDetails.occupancy}
        </Typography>
      </Grid>
      <Grid item sm={7}>
        <Typography variant="h6" className={classes.headerTitle}>
          Cell Status:
        </Typography>
        <Typography variant="h6" className={classes.headerContent}>
          {cellDetails.cellStatus}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

HeaderContent.propTypes = propTypes;

export default withStyles((theme) => ({
  grid: {
    flexGrow: 1,
  },
  logoutButton: {
    margin: theme.spacing.unit,
    backgroundColor: '#444480',
    color: '#F10607',
    '&:hover': {
      backgroundColor: '#444480',
    },
  },
  headerTitle: {
    display: 'inline',
    color: 'red',
    marginRight: theme.spacing.unit,
  },
  headerContent: {
    display: 'inline',
  },
}))(HeaderContent);
