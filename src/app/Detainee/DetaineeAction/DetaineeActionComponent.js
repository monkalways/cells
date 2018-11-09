import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Grid,
  withStyles,
} from '@material-ui/core';

import MedicalVisitIcon from '../../../images/MedicalVisit.png';
import PhoneAcceptIcon from '../../../images/PhoneAccept.png';
import PhoneDeclineIcon from '../../../images/PhoneDecline.png';
import FingerprintingIcon from '../../../images/Fingerprinting.png';
import BreathalyzerIcon from '../../../images/Breathalyzer.png';
import InterviewIcon from '../../../images/Interview.png';
import BailHearing1Icon from '../../../images/BailHearing1.png';
import BailHearing2Icon from '../../../images/BailHearing2.png';
import RemandHoldingIcon from '../../../images/RemandHolding.png';
import ReleaseHoldingIcon from '../../../images/ReleaseHolding.png';
import InCellIcon from '../../../images/InCell.png';

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

const DetaineeActionComponent = ({ classes }) => (
  <Card className={classes.card}>
    <CardHeader title="Detainee Action" className={classes.cardHeader} />
    <CardContent className={classes.cardContent}>
      <Grid container spacing={16}>
        <Grid container item xs={12}>
          <Grid item xs={2} className={classes.imgContainer}>
            <Avatar className={classes.avatar} src={MedicalVisitIcon} />
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <Avatar className={classes.avatar} src={PhoneAcceptIcon} />
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <Avatar className={classes.avatar} src={PhoneDeclineIcon} />
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <Avatar className={classes.avatar} src={FingerprintingIcon} />
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <Avatar className={classes.avatar} src={BreathalyzerIcon} />
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <Avatar className={classes.avatar} src={InterviewIcon} />
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={2} className={classes.imgContainer}>
            <Avatar className={classes.avatar} src={BailHearing1Icon} />
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <Avatar className={classes.avatar} src={BailHearing2Icon} />
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <Avatar className={classes.avatar} src={RemandHoldingIcon} />
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <Avatar className={classes.avatar} src={ReleaseHoldingIcon} />
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <Avatar className={classes.avatar} src={InCellIcon} />
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
DetaineeActionComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  avatar: {
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
  },
  cardContent: {
    backgroundColor: '#d4e2fc',
    paddingBottom: [16, '!important'],
  },
  cardHeader: {
    backgroundColor: '#3d89f7',
    padding: theme.spacing.unit,
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))(DetaineeActionComponent);
