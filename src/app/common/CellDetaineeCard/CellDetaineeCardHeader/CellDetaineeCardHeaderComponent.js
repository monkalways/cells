import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  CardContent,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

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
  cellDetainee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    division: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export const CellDetaineeCardHeaderComponent = ({ classes, cellDetainee }) => {
  const getLocationIconSrc = () => {
    const { location } = cellDetainee;
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
    <CardContent className={classes.header}>
      <Grid container>
        <Grid item sm={7}>
          <Typography variant="h6" className={classes.heading}>
            {cellDetainee.lastName}
          </Typography>
          <Typography variant="h6" className={classes.heading}>
            {cellDetainee.firstName}
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            {`{ ${cellDetainee.division[0]} }`}
          </Typography>
        </Grid>
        <Grid item sm={5}>
          <Avatar className={classes.avatar} src={getLocationIconSrc()} />
        </Grid>
      </Grid>
    </CardContent>
  );
};

CellDetaineeCardHeaderComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  header: {
    padding: theme.spacing.unit,
  },
  heading: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  subtitle: {
    color: '#7B2C31',
  },
  avatar: {
    margin: theme.spacing.unit,
    height: theme.spacing.unit * 10,
    width: theme.spacing.unit * 10,
  },
}))(CellDetaineeCardHeaderComponent);
