import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Grid, Typography, withStyles,
} from '@material-ui/core';

import MedicalVisitIcon from '../../images/MedicalVisit.png';
import PhoneAcceptIcon from '../../images/PhoneAccept.png';
import PhoneDeclineIcon from '../../images/PhoneDecline.png';
import FingerprintingIcon from '../../images/Fingerprinting.png';
import BreathalyzerIcon from '../../images/Breathalyzer.png';
import InterviewIcon from '../../images/Interview.png';
import BailHearingIcon from '../../images/BailHearingGeneral.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    medicalCount: PropTypes.number.isRequired,
    telephoneAcceptedCount: PropTypes.number.isRequired,
    telephoneDeclinedCount: PropTypes.number.isRequired,
    fingerPrintCount: PropTypes.number.isRequired,
    breathTestCount: PropTypes.number.isRequired,
    interviewCount: PropTypes.number.isRequired,
    bailHearingCount: PropTypes.number.isRequired,
  }).isRequired,
};

const variant = 'h6';

export const ActivitiesComponent = ({ classes, detainee }) => {
  const {
    medicalCount,
    telephoneAcceptedCount,
    telephoneDeclinedCount,
    fingerPrintCount,
    breathTestCount,
    interviewCount,
    bailHearingCount,
  } = detainee;

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.text}>
          Activities
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid item className={`${classes.gridItem} ${classes.topLeft}`}>
          <Avatar className={classes.avatar} src={MedicalVisitIcon} />
        </Grid>
        <Grid item className={`${classes.gridItem} ${classes.topCenter}`}>
          <Avatar className={classes.avatar} src={PhoneAcceptIcon} />
        </Grid>
        <Grid item className={`${classes.gridItem} ${classes.topCenter}`}>
          <Avatar className={classes.avatar} src={PhoneDeclineIcon} />
        </Grid>
        <Grid item className={`${classes.gridItem} ${classes.topCenter}`}>
          <Avatar className={classes.avatar} src={FingerprintingIcon} />
        </Grid>
        <Grid item className={`${classes.gridItem} ${classes.topCenter}`}>
          <Avatar className={classes.avatar} src={BreathalyzerIcon} />
        </Grid>
        <Grid item className={`${classes.gridItem} ${classes.topCenter}`}>
          <Avatar className={classes.avatar} src={InterviewIcon} />
        </Grid>
        <Grid item className={`${classes.gridItem} ${classes.topRight}`}>
          <Avatar className={classes.avatar} src={BailHearingIcon} />
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item className={`${classes.gridItem} ${classes.bottomLeft}`}>
          <Typography variant={variant} align="center">
            {medicalCount}
          </Typography>
        </Grid>
        <Grid item className={`${classes.gridItem} ${classes.bottomCenter}`}>
          <Typography variant={variant} align="center">
            {telephoneAcceptedCount}
          </Typography>
        </Grid>
        <Grid item className={`${classes.gridItem} ${classes.bottomCenter}`}>
          <Typography variant={variant} align="center">
            {telephoneDeclinedCount}
          </Typography>
        </Grid>
        <Grid item className={`${classes.gridItem} ${classes.bottomCenter}`}>
          <Typography variant={variant} align="center">
            {fingerPrintCount}
          </Typography>
        </Grid>
        <Grid item className={`${classes.gridItem} ${classes.bottomCenter}`}>
          <Typography variant={variant} align="center">
            {breathTestCount}
          </Typography>
        </Grid>
        <Grid item className={`${classes.gridItem} ${classes.bottomCenter}`}>
          <Typography variant={variant} align="center">
            {interviewCount}
          </Typography>
        </Grid>
        <Grid item className={`${classes.gridItem} ${classes.bottomRight}`}>
          <Typography variant={variant} align="center">
            {bailHearingCount}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

ActivitiesComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  avatar: {
    height: theme.spacing.unit * 8,
    width: theme.spacing.unit * 8,
  },
  bottomLeft: { borderWidth: '1px 1px 0 0' },
  bottomCenter: { borderWidth: '1px 1px 0 1px' },
  bottomRight: { borderWidth: '1px 0 0 1px' },
  grid: {
    padding: theme.spacing.unit * 0.5,
  },
  gridItem: {
    borderStyle: 'solid',
    borderColor: 'black',
    padding: theme.spacing.unit * 0.5,
    width: theme.spacing.unit * 10,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    textDecoration: 'underline',
  },
  topLeft: { borderWidth: '0 1px 1px 0' },
  topCenter: { borderWidth: '0 1px 1px 1px' },
  topRight: { borderWidth: '0 0 1px 1px' },
}))(ActivitiesComponent);
