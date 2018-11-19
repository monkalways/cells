import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import FooterRadioButtonGroup from './FooterRadioButtonGroup';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  radioButtonValue: PropTypes.string.isRequired,
  isSavingMedication: PropTypes.bool.isRequired,
  isSaveDisabled: PropTypes.bool.isRequired,
  onRadioGroupChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const MedicationFooterComponent = ({
  classes,
  history,
  radioButtonValue,
  isSavingMedication,
  isSaveDisabled,
  onRadioGroupChange,
  onSave,
}) => {
  const handleBackClick = () => {
    history.goBack();
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          <BottomNavigation
            value={-1}
            showLabels
            className={classes.navigation}
          >
            <BottomNavigationAction
              label={<Typography variant="body1">Back</Typography>}
              onClick={handleBackClick}
              icon={<ArrowBackIcon className={classes.icon} />}
              disabled={isSavingMedication}
            />
            <BottomNavigationAction
              label={<Typography variant="body1">Save</Typography>}
              onClick={onSave}
              icon={<SaveIcon className={classes.icon} />}
              disabled={isSaveDisabled || isSavingMedication}
            />
            <BottomNavigationAction disabled />
            <FooterRadioButtonGroup
              radioButtonValue={radioButtonValue}
              disabled={isSaveDisabled || isSavingMedication}
              onRadioGroupChange={onRadioGroupChange}
            />
          </BottomNavigation>
        </Grid>
      </AppBar>
    </div>
  );
};

MedicationFooterComponent.propTypes = propTypes;

export default compose(
  withStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.background.default,
    },
    navigation: {
      height: '100%',
      width: '69%',
      backgroundColor: theme.palette.background.default,
    },
    icon: {
      fontSize: theme.typography.h3.fontSize,
    },
  })),
  withRouter,
)(MedicationFooterComponent);
