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

import CellCheckFooterRadioButtonGroup from './CellCheckFooterRadioButtonGroup';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  radioButtonValue: PropTypes.string.isRequired,
  isSavingCellCheck: PropTypes.bool.isRequired,
  isSaveDisabled: PropTypes.bool.isRequired,
  onRadioGroupChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const CellCheckFooterComponent = ({
  classes,
  history,
  radioButtonValue,
  isSavingCellCheck,
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
              icon={<ArrowBackIcon className={classes.icon} />}
              onClick={handleBackClick}
              disabled={isSavingCellCheck}
            />
            <BottomNavigationAction
              label={<Typography variant="body1">Save</Typography>}
              icon={<SaveIcon className={classes.icon} />}
              disabled={isSaveDisabled || isSavingCellCheck}
              onClick={onSave}
            />
            <BottomNavigationAction disabled />
            <CellCheckFooterRadioButtonGroup
              radioButtonValue={radioButtonValue}
              disabled={isSaveDisabled || isSavingCellCheck}
              onRadioGroupChange={onRadioGroupChange}
            />
          </BottomNavigation>
        </Grid>
      </AppBar>
    </div>
  );
};

CellCheckFooterComponent.propTypes = propTypes;

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
)(CellCheckFooterComponent);
