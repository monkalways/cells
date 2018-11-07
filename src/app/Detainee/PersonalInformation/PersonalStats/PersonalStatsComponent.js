import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

const propTypes = {
  detainee: PropTypes.shape({}).isRequired,
};

const PersonalStatsComponent = ({ detainee }) => (
  <React.Fragment>
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="body2">Name:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle2">
              {detainee.lastName}, {detainee.firstName}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="body2">DOB:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle2">{detainee.dob}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="body2">Gender:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle2">{detainee.gender}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="body2">BIN:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle2">
              {detainee.propertyBagNumber ? detainee.propertyBagNumber : <br />}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="body2">Remarks:</Typography>
          </Grid>
          <Grid item xs={8}>
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

export default PersonalStatsComponent;
