import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';
import constants from '../constants';

import CellIcon from '../../images/InCell.png';
import InTransitIcon from '../../images/InTransit.png';
import BailHearingIcon from '../../images/BailHearingGeneral.png';
import BreathTestIcon from '../../images/Breathalyzer.png';
import FingerprintingIcon from '../../images/Fingerprinting.png';
import InterviewIcon from '../../images/Interview.png';
import MedicalIcon from '../../images/MedicalVisit.png';
import PhoneIcon from '../../images/PhoneAccept.png';
import ReleaseIcon from '../../images/ReleaseHolding.png';
import RemandIcon from '../../images/RemandHolding.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    location: PropTypes.string.isRequired,
  }).isRequired,
};

const LocationComponent = ({ classes, detainee }) => {
  const { location } = detainee;

  const getLocationIconSrc = () => {
    if (location) {
      if (location.includes(constants.IN_TRANSIT)) {
        return InTransitIcon;
      }

      switch (location.toLowerCase()) {
        case constants.BAIL_HEARING_IN_PROGRESS:
          return BailHearingIcon;
        case constants.BREATH_TEST_IN_PROGRESS:
          return BreathTestIcon;
        case constants.FINGERPRINTING_IN_PROGRESS:
          return FingerprintingIcon;
        case constants.INTERVIEW_IN_PROGRESS:
          return InterviewIcon;
        case constants.MEDICAL_IN_PROGRESS:
          return MedicalIcon;
        case constants.PHONE_IN_PROGRESS:
          return PhoneIcon;
        default:
          return CellIcon;
      }
    }
    return CellIcon;
  };

  const getTransitDestination = () => {
    switch (location) {
      case constants.BREATH_TEST_IN_TRANSIT:
        return BreathTestIcon;
      case constants.BAIL_HEARING_IN_TRANSIT:
        return BailHearingIcon;
      case constants.CELL_IN_TRANSIT:
        return CellIcon;
      case constants.FINGERPRINTING_IN_TRANSIT:
        return FingerprintingIcon;
      case constants.INTERVIEW_IN_TRANSIT:
        return InterviewIcon;
      case constants.MEDICAL_IN_TRANSIT:
        return MedicalIcon;
      case constants.PHONE_IN_TRANSIT:
        return PhoneIcon;
      case constants.RELEASE_HOLDING_IN_TRANSIT:
        return ReleaseIcon;
      case constants.REMAND_HOLDING_IN_TRANSIT:
        return RemandIcon;
      default:
        return null;
    }
  };

  const isDetaineeInTransit = () => {
    if (location) {
      return location.includes(constants.IN_TRANSIT);
    }
    return false;
  };

  return (
    <Grid container>
      <Grid item container justify="center" xs={12}>
        <Typography variant="h5" className={classes.text}>
          Location
        </Typography>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <div className={classes.div}>
          <img
            className={classes.mainImg}
            alt="Detainee Location"
            src={getLocationIconSrc()}
          />
          {isDetaineeInTransit() ? (
            <img
              className={classes.cornerImg}
              alt="Detainee Location"
              src={getTransitDestination()}
            />
          ) : (
            <div />
          )}
        </div>
      </Grid>
    </Grid>
  );
};

LocationComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  cornerImg: {
    height: theme.spacing.unit * 5,
    width: theme.spacing.unit * 5,
    position: 'absolute',
    top: '79%',
    left: '79%',
    mozTransform: 'translate(-50%, -50%)',
    oTransform: 'translate(-50%, -50%)',
    webkitTransform: 'translate(-50%, -50%)',
    msTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  div: {
    position: 'relative',
    height: theme.spacing.unit * 12,
    width: theme.spacing.unit * 12,
    marginTop: theme.spacing.unit,
  },
  mainImg: {
    height: theme.spacing.unit * 12,
    width: theme.spacing.unit * 12,
    position: 'absolute',
    top: '50%',
    left: '50%',
    mozTransform: 'translate(-50%, -50%)',
    oTransform: 'translate(-50%, -50%)',
    webkitTransform: 'translate(-50%, -50%)',
    msTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  text: {
    textDecoration: 'underline',
  },
}))(LocationComponent);
