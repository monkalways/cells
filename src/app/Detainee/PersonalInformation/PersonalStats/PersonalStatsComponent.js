import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    detentionUnitName: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    propertyBagNumber: PropTypes.string,
  }).isRequired,
};

const PersonalStatsComponent = ({ classes, detainee }) => (
  <React.Fragment>
    <Grid container spacing={0}>
      <Grid container item xs={12}>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.text}>
            Name:
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">
            {detainee.lastName}, {detainee.firstName}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.text}>
            DOB:
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">{detainee.dob}</Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.text}>
            Gender:
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">{detainee.gender}</Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.text}>
            BIN:
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">
            {detainee.propertyBagNumber ? detainee.propertyBagNumber : <br />}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.text}>
            Remarks:
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">{detainee.detentionUnitName}</Typography>
        </Grid>
      </Grid>
    </Grid>
  </React.Fragment>
);

PersonalStatsComponent.propTypes = propTypes;

export default withStyles(() => ({
  text: {
    fontWeight: 400,
  },
}))(PersonalStatsComponent);
