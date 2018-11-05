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
  onRadioGroupChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const CellCheckFooterComponent = ({
  classes,
  history,
  radioButtonValue,
  isSavingCellCheck,
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
              disabled={isSavingCellCheck}
              onClick={onSave}
            />
            <BottomNavigationAction disabled />
            <CellCheckFooterRadioButtonGroup
              radioButtonValue={radioButtonValue}
              isSavingCellCheck={isSavingCellCheck}
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
      backgroundColor: '#A8C6FA', // TODO: move color to theme
    },
    navigation: {
      height: '100%',
      width: '100%',
      backgroundColor: '#A8C6FA', // TODO: move color to theme
    },
    icon: {
      fontSize: theme.typography.h3.fontSize,
    },
  })),
  withRouter,
)(CellCheckFooterComponent);
