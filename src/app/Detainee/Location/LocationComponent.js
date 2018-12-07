import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';
import LocationIcon from '../../common/LocationIcon';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export const LocationComponent = ({ classes, detainee }) => {
  const { location } = detainee;

  return (
    <Grid container>
      <Grid item container justify="center" xs={12}>
        <Typography variant="h5" className={classes.text}>
          Location
        </Typography>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <div className={classes.div}>
          <LocationIcon location={location} />
        </div>
      </Grid>
    </Grid>
  );
};

LocationComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  div: {
    position: 'relative',
    height: theme.spacing.unit * 12,
    width: theme.spacing.unit * 12,
    marginTop: theme.spacing.unit,
  },
  text: {
    textDecoration: 'underline',
  },
}))(LocationComponent);
