import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid, withStyles } from '@material-ui/core';

import BailHearing1Icon from '../../../images/BailHearing1.png';
import BailHearing2Icon from '../../../images/BailHearing2.png';
import FingerprintingIcon from '../../../images/Fingerprinting.png';
import MedicalVisitIcon from '../../../images/MedicalVisit.png';
import PhoneAcceptIcon from '../../../images/PhoneAccept.png';
import InterviewIcon from '../../../images/Interview.png';
import BreathalyzerIcon from '../../../images/Breathalyzer.png';

const LOCATION_PHONE = 'phone';
const LOCATION_MEDICAL_VISIT = 'medical';
const LOCATION_FINGER_PRINTING = 'fingerprinting';
const LOCATION_BAIL_HEARING_1 = 'bail hearing1';
const LOCATION_BAIL_HEARING_2 = 'bail hearing2';
const LOCATION_INTERVIEW = 'interview';
const LOCATION_BREATH_TEST = 'breath test';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  usage: PropTypes.string.isRequired,
};

const HeaderContent = ({ classes, usage }) => {
  const getActivityRoomIcon = () => {
    let locationIconSrc = null;
    switch (usage.toLowerCase()) {
      case LOCATION_PHONE:
        locationIconSrc = PhoneAcceptIcon;
        break;
      case LOCATION_MEDICAL_VISIT:
        locationIconSrc = MedicalVisitIcon;
        break;
      case LOCATION_FINGER_PRINTING:
        locationIconSrc = FingerprintingIcon;
        break;
      case LOCATION_BAIL_HEARING_1:
        locationIconSrc = BailHearing1Icon;
        break;
      case LOCATION_BAIL_HEARING_2:
        locationIconSrc = BailHearing2Icon;
        break;
      case LOCATION_INTERVIEW:
        locationIconSrc = InterviewIcon;
        break;
      case LOCATION_BREATH_TEST:
        locationIconSrc = BreathalyzerIcon;
        break;
      default:
        break;
    }
    return locationIconSrc;
  };

  return (
    <Grid container justify="center" className={classes.grid}>
      <Grid container alignItems="center" justify="center">
        <Avatar className={classes.avatar} src={getActivityRoomIcon()} />
      </Grid>
    </Grid>
  );
};

HeaderContent.propTypes = propTypes;

export default withStyles((theme) => ({
  grid: {
    width: theme.spacing.unit * 60,
  },
  avatar: {
    margin: theme.spacing.unit,
    height: theme.spacing.unit * 8,
    width: theme.spacing.unit * 8,
  },
}))(HeaderContent);
