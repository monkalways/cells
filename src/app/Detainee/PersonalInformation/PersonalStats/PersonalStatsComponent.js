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

export const PersonalStatsComponent = ({ classes, detainee }) => {
  const {
    detentionUnitName,
    dob,
    firstName,
    gender,
    lastName,
    propertyBagNumber,
  } = detainee;

  return (
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
              {lastName}, {firstName}
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
            <Typography variant="h6">{dob}</Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={3}>
            <Typography variant="h6" className={classes.text}>
              Gender:
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6">{gender}</Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={3}>
            <Typography variant="h6" className={classes.text}>
              BIN:
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6">{propertyBagNumber || <br />}</Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={3}>
            <Typography variant="h6" className={classes.text}>
              Remarks:
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6">{detentionUnitName}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

PersonalStatsComponent.propTypes = propTypes;

export default withStyles(() => ({
  text: {
    fontWeight: 400,
  },
}))(PersonalStatsComponent);
