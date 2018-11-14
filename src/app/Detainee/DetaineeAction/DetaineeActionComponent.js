import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

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
  isMedicalRoomOptionAvailable: PropTypes.bool.isRequired,
};

const DetaineeActionComponent = ({ classes, isMedicalRoomOptionAvailable }) => (
  <Card className={classes.card}>
    <CardHeader
      component={() => (
        <Typography variant="h6" className={classes.cardHeader}>
          Detainee Action
        </Typography>
      )}
    />
    <CardContent className={classes.cardContent}>
      <Grid container spacing={16}>
        <Grid container item xs={12}>
          <Grid item xs={2} className={classes.imgContainer}>
            <IconButton
              className={classes.button}
              disabled={!isMedicalRoomOptionAvailable}
            >
              <Avatar
                className={classNames(classes.avatar, {
                  [classes.disabled]: !isMedicalRoomOptionAvailable,
                })}
                src={MedicalVisitIcon}
              />
            </IconButton>
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <IconButton className={classes.button}>
              <Avatar
                className={classNames(classes.avatar, {
                  [classes.disabled]: !isMedicalRoomOptionAvailable,
                })}
                src={PhoneAcceptIcon}
              />
            </IconButton>
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <IconButton className={classes.button}>
              <Avatar
                className={classNames(classes.avatar, {
                  [classes.disabled]: !isMedicalRoomOptionAvailable,
                })}
                src={PhoneDeclineIcon}
              />
            </IconButton>
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <IconButton className={classes.button}>
              <Avatar
                className={classNames(classes.avatar, {
                  [classes.disabled]: !isMedicalRoomOptionAvailable,
                })}
                src={FingerprintingIcon}
              />
            </IconButton>
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <IconButton className={classes.button}>
              <Avatar
                className={classNames(classes.avatar, {
                  [classes.disabled]: !isMedicalRoomOptionAvailable,
                })}
                src={BreathalyzerIcon}
              />
            </IconButton>
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <IconButton className={classes.button}>
              <Avatar
                className={classNames(classes.avatar, {
                  [classes.disabled]: !isMedicalRoomOptionAvailable,
                })}
                src={InterviewIcon}
              />
            </IconButton>
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={2} className={classes.imgContainer}>
            <IconButton className={classes.button}>
              <Avatar
                className={classNames(classes.avatar, {
                  [classes.disabled]: !isMedicalRoomOptionAvailable,
                })}
                src={BailHearing1Icon}
              />
            </IconButton>
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <IconButton className={classes.button}>
              <Avatar
                className={classNames(classes.avatar, {
                  [classes.disabled]: !isMedicalRoomOptionAvailable,
                })}
                src={BailHearing2Icon}
              />
            </IconButton>
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <IconButton className={classes.button}>
              <Avatar
                className={classNames(classes.avatar, {
                  [classes.disabled]: !isMedicalRoomOptionAvailable,
                })}
                src={RemandHoldingIcon}
              />
            </IconButton>
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <IconButton className={classes.button}>
              <Avatar
                className={classNames(classes.avatar, {
                  [classes.disabled]: !isMedicalRoomOptionAvailable,
                })}
                src={ReleaseHoldingIcon}
              />
            </IconButton>
          </Grid>
          <Grid item xs={2} className={classes.imgContainer}>
            <IconButton className={classes.button}>
              <Avatar
                className={classNames(classes.avatar, {
                  [classes.disabled]: !isMedicalRoomOptionAvailable,
                })}
                src={InCellIcon}
              />
            </IconButton>
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
  button: {
    padding: theme.spacing.unit * 0.5,
  },
  cardContent: {
    backgroundColor: '#d4e2fc',
    paddingBottom: [16, '!important'],
  },
  cardHeader: {
    backgroundColor: '#3d89f7',
    paddingLeft: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 0.5,
  },
  disabled: {
    opacity: '0.2',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))(DetaineeActionComponent);
