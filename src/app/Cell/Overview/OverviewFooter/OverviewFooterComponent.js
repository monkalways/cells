import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import MedicineAcceptIcon from '../../../images/MedicineAccept.png';
import MealAcceptIcon from '../../../images/MealAccept.png';
import WellnessVisualIcon from '../../../images/WellnessVisual.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onSignIn: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  cellName: PropTypes.string.isRequired,
};

const OverviewFooterComponent = ({
  classes,
  isAuthenticated,
  onSignIn,
  history,
  cellName,
}) => {
  const handleCellCheckClick = () => {
    history.push(`/cells/${cellName}/home/cell-check`);
  };
  const handleMealClick = () => {
    history.push(`/cells/${cellName}/home/meal`);
  };
  const handleMedicationClick = () => {
    history.push(`/cells/${cellName}/home/Medication`);
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
          {isAuthenticated ? (
            <BottomNavigation
              value={-1}
              showLabels
              className={classes.navigation}
            >
              <BottomNavigationAction
                label={<Typography variant="body1">Cell Check</Typography>}
                onClick={handleCellCheckClick}
                icon={(
                  <img
                    src={WellnessVisualIcon}
                    alt="wellness visual"
                    className={classes.navigationImage}
                  />
)}
              />
              <BottomNavigationAction
                label={<Typography variant="body1">Meal</Typography>}
                onClick={handleMealClick}
                icon={(
                  <img
                    src={MealAcceptIcon}
                    alt="meal accept"
                    className={classes.navigationImage}
                  />
)}
              />
              <BottomNavigationAction
                label={<Typography variant="body1">Medication</Typography>}
                onClick={handleMedicationClick}
                icon={(
                  <img
                    src={MedicineAcceptIcon}
                    alt="Medication accept"
                    className={classes.navigationImage}
                  />
)}
              />
            </BottomNavigation>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => onSignIn(true)}
            >
              Scan ID Card to Access
            </Button>
          )}
        </Grid>
      </AppBar>
    </div>
  );
};

OverviewFooterComponent.propTypes = propTypes;

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
    button: {
      margin: theme.spacing.unit,
    },
    navigationImage: {
      width: theme.spacing.unit * 6,
      height: theme.spacing.unit * 6,
    },
  })),
  withRouter,
)(OverviewFooterComponent);
