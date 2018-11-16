import React, { Component } from 'react';
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
import DetaineeActionDialog from './DetaineeActionDialog';

import MedicalVisitIcon from '../../images/MedicalVisit.png';
import PhoneAcceptIcon from '../../images/PhoneAccept.png';
import PhoneDeclineIcon from '../../images/PhoneDecline.png';
import FingerprintingIcon from '../../images/Fingerprinting.png';
import BreathalyzerIcon from '../../images/Breathalyzer.png';
import InterviewIcon from '../../images/Interview.png';
import BailHearing1Icon from '../../images/BailHearing1.png';
import BailHearing2Icon from '../../images/BailHearing2.png';
import RemandHoldingIcon from '../../images/RemandHolding.png';
import ReleaseHoldingIcon from '../../images/ReleaseHolding.png';
import InCellIcon from '../../images/InCell.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({}).isRequired,
  isBailHearingRoom1OptionAvailable: PropTypes.bool.isRequired,
  isBailHearingRoom2OptionAvailable: PropTypes.bool.isRequired,
  isBreathTestRoomOptionAvailable: PropTypes.bool.isRequired,
  isFingerprintingRoomOptionAvailable: PropTypes.bool.isRequired,
  isInCellOptionAvailable: PropTypes.bool.isRequired,
  isInterviewRoomOptionAvailable: PropTypes.bool.isRequired,
  isMedicalRoomOptionAvailable: PropTypes.bool.isRequired,
  isPhoneDeclineOptionAvailable: PropTypes.bool.isRequired,
  isPhoneRoomOptionAvailable: PropTypes.bool.isRequired,
  isReleaseRoomOptionAvailable: PropTypes.bool.isRequired,
  isRemandHoldingRoomOptionAvailable: PropTypes.bool.isRequired,
};

class DetaineeActionComponent extends Component {
  state = {
    isDialogOpen: false,
  };

  render() {
    const {
      classes,
      detainee,
      isBailHearingRoom1OptionAvailable,
      isBailHearingRoom2OptionAvailable,
      isBreathTestRoomOptionAvailable,
      isFingerprintingRoomOptionAvailable,
      isInCellOptionAvailable,
      isInterviewRoomOptionAvailable,
      isMedicalRoomOptionAvailable,
      isPhoneDeclineOptionAvailable,
      isPhoneRoomOptionAvailable,
      isReleaseRoomOptionAvailable,
      isRemandHoldingRoomOptionAvailable,
    } = this.props;

    const { isDialogOpen } = this.state;

    return (
      <Card className={classes.card}>
        <CardHeader
          component={() => (
            <Typography variant="h5" className={classes.cardHeader}>
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
                <IconButton
                  className={classes.button}
                  disabled={!isPhoneRoomOptionAvailable}
                >
                  <Avatar
                    className={classNames(classes.avatar, {
                      [classes.disabled]: !isPhoneRoomOptionAvailable,
                    })}
                    src={PhoneAcceptIcon}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={2} className={classes.imgContainer}>
                <IconButton
                  className={classes.button}
                  disabled={!isPhoneDeclineOptionAvailable}
                >
                  <Avatar
                    className={classNames(classes.avatar, {
                      [classes.disabled]: !isPhoneDeclineOptionAvailable,
                    })}
                    src={PhoneDeclineIcon}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={2} className={classes.imgContainer}>
                <IconButton
                  className={classes.button}
                  disabled={!isFingerprintingRoomOptionAvailable}
                >
                  <Avatar
                    className={classNames(classes.avatar, {
                      [classes.disabled]: !isFingerprintingRoomOptionAvailable,
                    })}
                    src={FingerprintingIcon}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={2} className={classes.imgContainer}>
                <IconButton
                  className={classes.button}
                  disabled={!isBreathTestRoomOptionAvailable}
                >
                  <Avatar
                    className={classNames(classes.avatar, {
                      [classes.disabled]: !isBreathTestRoomOptionAvailable,
                    })}
                    src={BreathalyzerIcon}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={2} className={classes.imgContainer}>
                <IconButton
                  className={classes.button}
                  disabled={!isInterviewRoomOptionAvailable}
                >
                  <Avatar
                    className={classNames(classes.avatar, {
                      [classes.disabled]: !isInterviewRoomOptionAvailable,
                    })}
                    src={InterviewIcon}
                  />
                </IconButton>
              </Grid>
            </Grid>

            <Grid container item xs={12}>
              <Grid item xs={2} className={classes.imgContainer}>
                <IconButton
                  className={classes.button}
                  disabled={!isBailHearingRoom1OptionAvailable}
                >
                  <Avatar
                    className={classNames(classes.avatar, {
                      [classes.disabled]: !isBailHearingRoom1OptionAvailable,
                    })}
                    src={BailHearing1Icon}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={2} className={classes.imgContainer}>
                <IconButton
                  className={classes.button}
                  disabled={!isBailHearingRoom2OptionAvailable}
                >
                  <Avatar
                    className={classNames(classes.avatar, {
                      [classes.disabled]: !isBailHearingRoom2OptionAvailable,
                    })}
                    src={BailHearing2Icon}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={2} className={classes.imgContainer}>
                <IconButton
                  className={classes.button}
                  disabled={!isRemandHoldingRoomOptionAvailable}
                >
                  <Avatar
                    className={classNames(classes.avatar, {
                      [classes.disabled]: !isRemandHoldingRoomOptionAvailable,
                    })}
                    src={RemandHoldingIcon}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={2} className={classes.imgContainer}>
                <IconButton
                  className={classes.button}
                  disabled={!isReleaseRoomOptionAvailable}
                >
                  <Avatar
                    className={classNames(classes.avatar, {
                      [classes.disabled]: !isReleaseRoomOptionAvailable,
                    })}
                    src={ReleaseHoldingIcon}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={2} className={classes.imgContainer}>
                <IconButton
                  className={classes.button}
                  disabled={!isInCellOptionAvailable}
                >
                  <Avatar
                    className={classNames(classes.avatar, {
                      [classes.disabled]: !isInCellOptionAvailable,
                    })}
                    src={InCellIcon}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <DetaineeActionDialog detainee={detainee} isDialogOpen={isDialogOpen} />
      </Card>
    );
  }
}

DetaineeActionComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  avatar: {
    height: theme.spacing.unit * 8,
    width: theme.spacing.unit * 8,
  },
  button: {
    padding: theme.spacing.unit,
  },
  cardContent: {
    backgroundColor: '#d4e2fc',
    paddingBottom: [16, '!important'],
  },
  cardHeader: {
    backgroundColor: '#3d89f7',
    paddingLeft: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  disabled: {
    opacity: '0.2',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))(DetaineeActionComponent);
