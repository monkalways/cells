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
import PrintIcon from '@material-ui/icons/Print';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const CustomBottomNavigationAction = withStyles((theme) => ({
  root: {
    flex: 0,
    marginLeft: theme.spacing.unit * 4,
  },
}))(BottomNavigationAction);

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isLoadingReport: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export const OverviewFooterComponent = ({
  classes,
  isLoadingReport,
  history,
}) => {
  const handleBackClick = () => {
    history.goBack();
  };
  const handlePrintClick = () => {
    alert('Print');
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Grid container alignItems="center">
          <BottomNavigation
            value={-1}
            showLabels
            className={classes.navigation}
          >
            <CustomBottomNavigationAction
              id="backButton"
              label={<Typography variant="body1">Back</Typography>}
              onClick={handleBackClick}
              icon={<ArrowBackIcon className={classes.icon} />}
              disabled={isLoadingReport}
              className={classes.backButton}
            />
            <BottomNavigationAction
              id="mealButton"
              label={<Typography variant="body1">Print</Typography>}
              onClick={handlePrintClick}
              icon={<PrintIcon className={classes.icon} />}
              disabled={isLoadingReport}
            />
          </BottomNavigation>
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
      backgroundColor: theme.palette.background.default,
    },
    navigation: {
      height: '100%',
      width: '69%',
      backgroundColor: theme.palette.background.default,
      justifyContent: 'start',
    },
    button: {
      height: theme.spacing.unit * 7,
      width: theme.spacing.unit * 40,
      margin: theme.spacing.unit * 2,
    },
    navigationImage: {
      width: theme.spacing.unit * 6,
      height: theme.spacing.unit * 6,
    },
    icon: {
      fontSize: theme.typography.h3.fontSize,
    },
    backButton: {
      marginRight: theme.spacing.unit * 14,
      paddingLeft: 0,
    },
  })),
  withRouter,
)(OverviewFooterComponent);
