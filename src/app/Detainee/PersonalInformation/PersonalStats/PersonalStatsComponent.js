import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Paper, Typography, withStyles,
} from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({}).isRequired,
};

const PersonalStatsComponent = ({ classes, detainee }) => (
  <React.Fragment>
    <Grid container>
      <Grid item sm={4}>
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.column}
          spacing={8}
        >
          <Grid item xs>
            <Grid container>
              <Typography variant="subtitle2">Name:</Typography>
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2">DOB:</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2">Gender:</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2">BIN:</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2">Remarks:</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sm={8}>
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.column}
          spacing={8}
        >
          <Grid item xs>
            <Grid container>
              <Typography variant="subtitle2">
                {detainee.lastName}, {detainee.firstName}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2">{detainee.dob}</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2">{detainee.gender}</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2">
              {detainee.propertyBagNumber}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2">
              {detainee.detentionUnitName}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </React.Fragment>
);

PersonalStatsComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  img: {
    width: '150px',
    height: '150px',
  },
  row: {
    padding: theme.spacing.unit * 0.5,
  },
  column: {
    padding: theme.spacing.unit * 0.5,
  },
}))(PersonalStatsComponent);
