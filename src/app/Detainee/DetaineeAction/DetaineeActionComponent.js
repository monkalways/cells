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
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import IconButton from '@material-ui/core/IconButton';
import ActivityRoomDialog from './ActivityRoomDialog';
import CellDialog from './CellDialog';
import FingerprintingWarningDialog from './FingerprintingWarningDialog';
import PhoneCallWarningDialog from './PhoneCallWarningDialog';
import PhoneDeclineDialog from './PhoneDeclineDialog';
import ReleaseRoomDialog from './ReleaseRoomDialog';
import RemandRoomDialog from './RemandRoomDialog';
import RoomSelectionDialog from './RoomSelectionDialog';

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
import constants from '../constants';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    fingerPrintCount: PropTypes.number,
    firstName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    overrideFingerprintingWarning: PropTypes.bool.isRequired,
    telephoneAcceptedCount: PropTypes.number,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
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
  isRemandRoomOptionAvailable: PropTypes.bool.isRequired,
};

const activityRoomDialog = 'activityRoomDialog';
const cellDialog = 'cellDialog';
const phoneDeclineDialog = 'phoneDeclineDialog';
const releaseRoomDialog = 'releaseRoomDialog';
const remandRoomDialog = 'remandRoomDialog';
const roomSelectionDialog = 'roomSelectionDialog';

export class DetaineeActionComponent extends Component {
  state = {
    fingerprintingWarningDialogOpen: false,
    phonecallWarningDialogOpen: false,
    mainDialogOpen: null,
    usage: null,
  };

  handleActivityRoomButtonClick = (usage) => {
    this.setState({
      mainDialogOpen: activityRoomDialog,
      usage,
    });
    const { detainee } = this.props;
    const {
      fingerPrintCount,
      overrideFingerprintingWarning,
      telephoneAcceptedCount,
    } = detainee;

    if (
      usage === constants.BAIL_HEARING_ROOM_1
      || usage === constants.BAIL_HEARING_ROOM_2
    ) {
      if (fingerPrintCount === 0 && !overrideFingerprintingWarning) {
        this.setState({
          fingerprintingWarningDialogOpen: true,
        });
      }
      if (telephoneAcceptedCount === 0) {
        this.setState({
          phonecallWarningDialogOpen: true,
        });
      }
    }
  };

  handleFlowStop = () => {
    this.setState({
      fingerprintingWarningDialogOpen: false,
      phonecallWarningDialogOpen: false,
      mainDialogOpen: null,
      usage: null,
    });
    const { detainee, handleClose } = this.props;
    handleClose(detainee.id);
  };

  handleCellButtonClick = () => {
    this.setState({
      mainDialogOpen: cellDialog,
    });
  };

  handleFingerprintingWarningIgnore = () => {
    this.setState({
      fingerprintingWarningDialogOpen: false,
    });
  };

  handlePhonecallWarningIgnore = () => {
    this.setState({
      phonecallWarningDialogOpen: false,
    });
  };

  handlePhoneDeclineButtonClick = () => {
    this.setState({
      mainDialogOpen: phoneDeclineDialog,
    });
  };

  handleReleaseRoomButtonClick = () => {
    this.setState({
      mainDialogOpen: releaseRoomDialog,
    });
  };

  handleRemandRoomButtonClick = () => {
    this.setState({
      mainDialogOpen: remandRoomDialog,
    });
  };

  handleRoomSelectionDialogButtonClick = (usage) => {
    this.setState({
      mainDialogOpen: roomSelectionDialog,
      usage,
    });
  };

  isActivityRoomDialogOpen = () => {
    const { mainDialogOpen } = this.state;
    return mainDialogOpen === activityRoomDialog;
  };

  isCellDialogOpen = () => {
    const { mainDialogOpen } = this.state;
    return mainDialogOpen === cellDialog;
  };

  isPhoneDeclineDialogOpen = () => {
    const { mainDialogOpen } = this.state;
    return mainDialogOpen === phoneDeclineDialog;
  };

  isReleaseRoomDialogOpen = () => {
    const { mainDialogOpen } = this.state;
    return mainDialogOpen === releaseRoomDialog;
  };

  isRemandRoomDialogOpen = () => {
    const { mainDialogOpen } = this.state;
    return mainDialogOpen === remandRoomDialog;
  };

  isRoomSelectionDialogOpen = () => {
    const { mainDialogOpen } = this.state;
    return mainDialogOpen === roomSelectionDialog;
  };

  render() {
    const {
      classes,
      detainee,
      history,
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
      isRemandRoomOptionAvailable,
    } = this.props;

    const {
      fingerprintingWarningDialogOpen,
      phonecallWarningDialogOpen,
      usage,
    } = this.state;

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
                  id="medical"
                  className={classes.button}
                  disabled={!isMedicalRoomOptionAvailable}
                  onClick={() => {
                    this.handleActivityRoomButtonClick(constants.MEDICAL_ROOM);
                  }}
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
                  id="phoneAccept"
                  className={classes.button}
                  disabled={!isPhoneRoomOptionAvailable}
                  onClick={() => {
                    this.handleActivityRoomButtonClick(constants.PHONE_ROOM);
                  }}
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
                  id="phoneDecline"
                  className={classes.button}
                  disabled={!isPhoneDeclineOptionAvailable}
                  onClick={() => {
                    this.handlePhoneDeclineButtonClick();
                  }}
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
                  id="fingerprinting"
                  className={classes.button}
                  disabled={!isFingerprintingRoomOptionAvailable}
                  onClick={() => {
                    this.handleRoomSelectionDialogButtonClick(constants.FINGERPRINTING_ROOM);
                  }}
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
                  id="breathTest"
                  className={classes.button}
                  disabled={!isBreathTestRoomOptionAvailable}
                  onClick={() => {
                    this.handleActivityRoomButtonClick(constants.BREATH_TEST_ROOM);
                  }}
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
                  id="interview"
                  className={classes.button}
                  disabled={!isInterviewRoomOptionAvailable}
                  onClick={() => {
                    this.handleRoomSelectionDialogButtonClick(constants.INTERVIEW_ROOM);
                  }}
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
                  id="bailHearing1"
                  className={classes.button}
                  disabled={!isBailHearingRoom1OptionAvailable}
                  onClick={() => {
                    this.handleActivityRoomButtonClick(constants.BAIL_HEARING_ROOM_1);
                  }}
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
                  id="bailHearing2"
                  className={classes.button}
                  disabled={!isBailHearingRoom2OptionAvailable}
                  onClick={() => {
                    this.handleActivityRoomButtonClick(constants.BAIL_HEARING_ROOM_2);
                  }}
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
                  id="remandHolding"
                  className={classes.button}
                  disabled={!isRemandRoomOptionAvailable}
                  onClick={() => {
                    this.handleRemandRoomButtonClick();
                  }}
                >
                  <Avatar
                    className={classNames(classes.avatar, {
                      [classes.disabled]: !isRemandRoomOptionAvailable,
                    })}
                    src={RemandHoldingIcon}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={2} className={classes.imgContainer}>
                <IconButton
                  id="releaseHolding"
                  className={classes.button}
                  disabled={!isReleaseRoomOptionAvailable}
                  onClick={() => {
                    this.handleReleaseRoomButtonClick();
                  }}
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
                  id="cell"
                  className={classes.button}
                  disabled={!isInCellOptionAvailable}
                  onClick={() => {
                    this.handleCellButtonClick();
                  }}
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
        <ActivityRoomDialog
          detainee={detainee}
          goBack={() => history.goBack()}
          isDialogOpen={this.isActivityRoomDialogOpen()}
          onClose={this.handleFlowStop}
          usage={usage}
        />
        <CellDialog
          detainee={detainee}
          goBack={() => history.goBack()}
          isDialogOpen={this.isCellDialogOpen()}
          onClose={this.handleFlowStop}
        />
        <FingerprintingWarningDialog
          handleCancel={this.handleFlowStop}
          handleClose={this.handleFlowStop}
          handleIgnore={this.handleFingerprintingWarningIgnore}
          isDialogOpen={fingerprintingWarningDialogOpen}
        />
        <PhoneCallWarningDialog
          handleCancel={this.handleFlowStop}
          handleClose={this.handleFlowStop}
          handleIgnore={this.handlePhonecallWarningIgnore}
          isDialogOpen={phonecallWarningDialogOpen}
        />
        <PhoneDeclineDialog
          detainee={detainee}
          goBack={() => history.goBack()}
          isDialogOpen={this.isPhoneDeclineDialogOpen()}
          onClose={this.handleFlowStop}
        />
        <ReleaseRoomDialog
          detainee={detainee}
          goBack={() => history.goBack()}
          isDialogOpen={this.isReleaseRoomDialogOpen()}
          onClose={this.handleFlowStop}
        />
        <RemandRoomDialog
          detainee={detainee}
          goBack={() => history.goBack()}
          isDialogOpen={this.isRemandRoomDialogOpen()}
          onClose={this.handleFlowStop}
        />
        <RoomSelectionDialog
          detainee={detainee}
          goBack={() => history.goBack()}
          isDialogOpen={this.isRoomSelectionDialogOpen()}
          onClose={this.handleFlowStop}
          usage={usage}
        />
      </Card>
    );
  }
}

DetaineeActionComponent.propTypes = propTypes;

export default compose(
  withStyles((theme) => ({
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
  })),
  withRouter,
)(DetaineeActionComponent);
