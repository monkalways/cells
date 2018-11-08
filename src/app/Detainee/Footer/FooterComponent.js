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
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const FooterComponent = ({ classes, history }) => {
  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Grid
          container
          justify="left"
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
              onClick={handleBackButtonClick}
              icon={<ArrowBackIcon className={classes.icon} />}
            />
          </BottomNavigation>
        </Grid>
      </AppBar>
    </div>
  );
};

FooterComponent.propTypes = propTypes;

export default compose(
  withStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.background.default,
    },
    icon: {
      fontSize: theme.typography.h3.fontSize,
    },
    navigation: {
      height: '100%',
      width: theme.spacing.unit * 15,
      backgroundColor: theme.palette.background.default,
    },
  })),
  withRouter,
)(FooterComponent);
