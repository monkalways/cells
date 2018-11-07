import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Divider,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

import MedicalVisitIcon from '../../../images/MedicalVisit.png';
import PhoneAcceptIcon from '../../../images/PhoneAccept.png';
import PhoneDeclineIcon from '../../../images/PhoneDecline.png';
import FingerprintingIcon from '../../../images/Fingerprinting.png';
import BreathalyzerIcon from '../../../images/Breathalyzer.png';
import InterviewIcon from '../../../images/Interview.png';
import BailHearingIcon from '../../../images/BailHearingGeneral.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    mealAcceptedCount: PropTypes.number.isRequired,
    mealDeclinedCount: PropTypes.number.isRequired,
    medicationAcceptedCount: PropTypes.number.isRequired,
    medicationRefusedCount: PropTypes.number.isRequired,
    verbalCellCheckCount: PropTypes.number.isRequired,
    visualCellCheckCount: PropTypes.number.isRequired,
  }).isRequired,
};

const gridSpacing = 1;
const variant = 'subtitle2';

const ActivitiesComponent = ({ classes, detainee }) => (
  <Grid container spacing={8} className={classes.grid}>
    <Grid item xs={12}>
      <Typography variant="subtitle2">Activities</Typography>
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={16}>
        <Grid item xs={gridSpacing}>
          <Avatar className={classes.avatar} src={MedicalVisitIcon} />
        </Grid>
        <Grid item xs={gridSpacing}>
          <Avatar className={classes.avatar} src={PhoneAcceptIcon} />
        </Grid>
        <Grid item xs={gridSpacing}>
          <Avatar className={classes.avatar} src={PhoneDeclineIcon} />
        </Grid>
        <Grid item xs={gridSpacing}>
          <Avatar className={classes.avatar} src={FingerprintingIcon} />
        </Grid>
        <Grid item xs={gridSpacing}>
          <Avatar className={classes.avatar} src={BreathalyzerIcon} />
        </Grid>
        <Grid item xs={gridSpacing}>
          <Avatar className={classes.avatar} src={InterviewIcon} />
        </Grid>
        <Grid item xs={gridSpacing}>
          <Avatar className={classes.avatar} src={BailHearingIcon} />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Divider />
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={16}>
        <Grid item xs={gridSpacing}>
          <Typography variant={variant} align="center">
            {detainee.medicalCount}
          </Typography>
        </Grid>
        <Grid item xs={gridSpacing}>
          <Typography variant={variant} align="center">
            {detainee.telephoneAcceptedCount}
          </Typography>
        </Grid>
        <Grid item xs={gridSpacing}>
          <Typography variant={variant} align="center">
            {detainee.telephoneDeclinedCount}
          </Typography>
        </Grid>
        <Grid item xs={gridSpacing}>
          <Typography variant={variant} align="center">
            {detainee.fingerPrintCount}
          </Typography>
        </Grid>
        <Grid item xs={gridSpacing}>
          <Typography variant={variant} align="center">
            {detainee.breathTestCount}
          </Typography>
        </Grid>
        <Grid item xs={gridSpacing}>
          <Typography variant={variant} align="center">
            {detainee.interviewCount}
          </Typography>
        </Grid>
        <Grid item xs={gridSpacing}>
          <Typography variant={variant} align="center">
            {detainee.bailHearingCount}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
ActivitiesComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  avatar: {
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
  },
  grid: {
    padding: theme.spacing.unit * 0.5,
  },
}))(ActivitiesComponent);
