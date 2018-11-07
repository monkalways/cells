import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  Grid,
  Paper,
  Typography,
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

const gridSpacing = 2;

const DetaineeActionComponent = ({ classes, detainee }) => (
  <Paper className={classes.body}>
    <Grid container spacing={8} className={classes.grid}>
      <Grid item xs={12}>
        <Paper className={classes.heading}>
          <Typography variant="subtitle2" className={classes.text}>
            Detainee Action
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={gridSpacing}>
            <Avatar className={classes.avatar} src={MedicalVisitIcon} />
            {/* <Button variant="contained" className={classes.button}>
            MedicalVisitIcon
            </Button> */}
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
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={gridSpacing}>
            <Avatar className={classes.avatar} src={BailHearing1Icon} />
          </Grid>
          <Grid item xs={gridSpacing}>
            <Avatar className={classes.avatar} src={BailHearing2Icon} />
          </Grid>
          <Grid item xs={gridSpacing}>
            <Avatar className={classes.avatar} src={RemandHoldingIcon} />
          </Grid>
          <Grid item xs={gridSpacing}>
            <Avatar className={classes.avatar} src={ReleaseHoldingIcon} />
          </Grid>
          <Grid item xs={gridSpacing}>
            <Avatar className={classes.avatar} src={InCellIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);
DetaineeActionComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  avatar: {
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
  },
  body: {
    backgroundColor: '#d4e2fc',
  },
  button: {
    margin: theme.spacing.unit,
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
  },
  heading: {
    backgroundColor: '#3d89f7',
  },
  grid: {
    paddingBottom: theme.spacing.unit * 0.5,
    paddingLeft: theme.spacing.unit * 0.5,
    paddingRight: theme.spacing.unit * 0.5,
  },
  text: {
    paddingLeft: theme.spacing.unit,
    color: 'white',
  },
}))(DetaineeActionComponent);
