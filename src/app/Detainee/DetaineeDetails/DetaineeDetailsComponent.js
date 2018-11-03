import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, withStyles } from '@material-ui/core';
import Loading from '../../common/Loading';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({}),
};

const defaultProps = {
  detainee: null,
};

// Make an action to determine if detainee data has loaded or not
// Replace "detainee ?" with "isDetaineeDataLoaded ?"
const DetaineeDetailsComponent = ({ classes, detainee }) => (
  <React.Fragment>
    {detainee ? (
      <React.Fragment>
        <Grid container className={classes.container} spacing={8}>
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
                <Paper className={classes.paper}>Personal Information</Paper>
              </Grid>
              <Grid item sm={3}>
                <Paper className={classes.paper}>Location</Paper>
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
        </Grid>
      </React.Fragment>
    ) : (
      <Loading />
    )}
  </React.Fragment>
);

DetaineeDetailsComponent.propTypes = propTypes;
DetaineeDetailsComponent.defaultProps = defaultProps;

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
