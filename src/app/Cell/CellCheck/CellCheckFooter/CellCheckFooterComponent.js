import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  withStyles,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const OverviewFooterComponent = ({ classes, history }) => {
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
            />
            <BottomNavigationAction
              label={<Typography variant="body1">Save</Typography>}
              icon={<SaveIcon className={classes.icon} />}
            />
            <BottomNavigationAction />
            <div>
              <RadioGroup
                name="cellCheckRadio"
                className={classes.group}
                value="visual"
              >
                <FormControlLabel
                  value="visual"
                  control={<Radio className={classes.radioButton} />}
                  label={<Typography variant="body1">Visual - All</Typography>}
                />
                <FormControlLabel
                  value="verbal"
                  control={<Radio className={classes.radioButton} />}
                  label={<Typography variant="body1">Verbal - All</Typography>}
                />
              </RadioGroup>
            </div>
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
    group: {
      marginTop: theme.spacing.unit * 0.8,
      marginLeft: -theme.spacing.unit * 5,
    },
    radioButton: {
      padding: theme.spacing.unit,
    },
  })),
  withRouter,
)(OverviewFooterComponent);
