import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import InCellIcon from '../../../images/InCell.png';
import InTransitIcon from '../../../images/InTransit.png';
import BailHearingGeneralIcon from '../../../images/BailHearingGeneral.png';
import FingerprintingIcon from '../../../images/Fingerprinting.png';
import MedicalVisitIcon from '../../../images/MedicalVisit.png';
import PhoneAcceptIcon from '../../../images/PhoneAccept.png';

const LOCATION_PHONE_ACCEPT = 'phone - in progress';
const LOCATION_MEDICAL_VISIT = 'medical - in progress';
const LOCATION_FINGER_PRINTING = 'fingerprinting - in progress';
const LOCATION_BAIL_HEARING = 'bail hearing - in progress';
const LOCATION_IN_TRANSIT = 'in transit';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  location: PropTypes.string.isRequired,
};

const LocationComponent = ({ classes, location }) => {
  const getLocationIconSrc = () => {
    let locationIconSrc = InCellIcon;

    if (location) {
      if (location.toLowerCase().includes(LOCATION_IN_TRANSIT)) {
        locationIconSrc = InTransitIcon;
      }

      switch (location.toLowerCase()) {
        case LOCATION_PHONE_ACCEPT:
          locationIconSrc = PhoneAcceptIcon;
          break;
        case LOCATION_MEDICAL_VISIT:
          locationIconSrc = MedicalVisitIcon;
          break;
        case LOCATION_FINGER_PRINTING:
          locationIconSrc = FingerprintingIcon;
          break;
        case LOCATION_BAIL_HEARING:
          locationIconSrc = BailHearingGeneralIcon;
          break;
        default:
          break;
      }
    }

    return locationIconSrc;
  };

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      className={classes.column}
      spacing={8}
    >
      <Grid item>
        <Typography>Location</Typography>
      </Grid>
      <Grid item>
        <img
          className={classes.img}
          alt="Detainee Location"
          src={getLocationIconSrc()}
        />
      </Grid>
    </Grid>
  );
};

LocationComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  img: {
    width: '150px',
    height: '150px',
  },
  column: {
    padding: theme.spacing.unit * 0.5,
  },
}))(LocationComponent);
