import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

const propTypes = {
  detainee: PropTypes.shape({
    detentionUnitName: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    propertyBagNumber: PropTypes.string,
  }).isRequired,
};

const PersonalStatsComponent = ({ detainee }) => (
  <React.Fragment>
    <Grid container spacing={0}>
      <Grid container item xs={12}>
        <Grid item xs={3}>
          <Typography variant="h6">Name:</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">
            {detainee.lastName}, {detainee.firstName}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={3}>
          <Typography variant="h6">DOB:</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">{detainee.dob}</Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={3}>
          <Typography variant="h6">Gender:</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">{detainee.gender}</Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={3}>
          <Typography variant="h6">BIN:</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">
            {detainee.propertyBagNumber ? detainee.propertyBagNumber : <br />}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={3}>
          <Typography variant="h6">Remarks:</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">{detainee.detentionUnitName}</Typography>
        </Grid>
      </Grid>
    </Grid>
  </React.Fragment>
);

PersonalStatsComponent.propTypes = propTypes;

export default PersonalStatsComponent;
