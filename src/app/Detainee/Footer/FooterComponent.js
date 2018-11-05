import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Button, Grid, withStyles,
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
    history.push('/cells/A1/home');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Grid
          container
          alignItems="center"
          spacing={8}
          className={classes.container}
        >
          <Grid item sm>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              onClick={() => handleBackButtonClick()}
            >
              <ArrowBackIcon className={classes.icon} />
              Back
            </Button>
          </Grid>
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
    container: {
      padding: theme.spacing.unit * 1,
    },
    icon: {
      fontSize: theme.typography.h3.fontSize,
    },
    button: {
      padding: theme.spacing.unit * 1,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    appBar: {
      backgroundColor: '#A8C6FA', // TODO: move color to theme
    },
    // navigation: {
    //   height: '100%',
    //   width: '100%',
    //   backgroundColor: '#A8C6FA', // TODO: move color to theme
    // },
  })),
  withRouter,
)(FooterComponent);
