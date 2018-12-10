import React from 'react';
import PropTypes from 'prop-types';
import { Badge, withStyles } from '@material-ui/core';
import constants from '../../constants';

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
  location: PropTypes.string.isRequired,
};

export const LocationIconComponent = ({ classes, location }) => {
  const getLocationIcon = () => {
    if (location) {
      if (location.includes(constants.IN_TRANSIT)) {
        return InTransitIcon;
      }

      switch (location) {
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

  const getTransitDestinationIcon = () => {
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
    <Badge
      classes={{ badge: classes.badge }}
      badgeContent={
        isDetaineeInTransit() ? (
          <img
            className={classes.cornerImg}
            alt="Transit Destination"
            src={getTransitDestinationIcon()}
          />
        ) : (
          <div />
        )
      }
    >
      <img
        className={classes.mainImg}
        alt="Detainee Location"
        src={getLocationIcon()}
      />
    </Badge>
  );
};

LocationIconComponent.propTypes = propTypes;

export default withStyles(() => ({
  badge: {
    height: '41.6%',
    width: '41.6%',
    top: '58.3%',
    right: 0,
  },
  cornerImg: {
    height: '100%',
    width: '100%',
  },
  mainImg: {
    height: '100%',
    width: '100%',
  },
}))(LocationIconComponent);
