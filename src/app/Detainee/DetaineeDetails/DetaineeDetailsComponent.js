import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, withStyles } from '@material-ui/core';
import Loading from '../../common/Loading';
import DetaineeGrid from '../DetaineeGrid';
import PersonalInformation from '../PersonalInformation';
import Location from '../Location';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({}),
  isDetaineeProfileLoaded: PropTypes.bool.isRequired,
};

const defaultProps = {
  detainee: null,
};

// Make an action to determine if detainee data has loaded or not
// Replace "detainee ?" with "isDetaineeDataLoaded ?"
const DetaineeDetailsComponent = ({
  classes,
  detainee,
  isDetaineeProfileLoaded,
}) => (
  <React.Fragment>
    <DetaineeGrid>
      {isDetaineeProfileLoaded ? (
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.column}
          spacing={8}
        >
          <Grid
            container
            justify="space-between"
            className={classes.row}
            spacing={8}
          >
            <Grid item sm={9}>
              <PersonalInformation detainee={detainee} />
            </Grid>
            <Grid item sm={3}>
              <Location location={detainee.location} />
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            className={classes.row}
            spacing={8}
          >
            <Grid item sm>
              <Paper className={classes.paper}>Notice</Paper>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            className={classes.row}
            spacing={8}
          >
            <Grid item sm>
              <Paper className={classes.paper}>Provided Welfare</Paper>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            className={classes.row}
            spacing={8}
          >
            <Grid item sm>
              <Paper className={classes.paper}>Activities</Paper>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            className={classes.row}
            spacing={8}
          >
            <Grid item sm>
              <Paper className={classes.paper}>Detainee Action</Paper>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Loading />
      )}
    </DetaineeGrid>
  </React.Fragment>
);

DetaineeDetailsComponent.propTypes = propTypes;
DetaineeDetailsComponent.defaultProps = defaultProps;

export default withStyles((theme) => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: theme.spacing.unit * 16,
  },
  row: {
    padding: theme.spacing.unit * 0.5,
  },
  column: {},
}))(DetaineeDetailsComponent);
