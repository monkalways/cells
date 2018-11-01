import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Button, Toolbar, withStyles,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import { fade } from '@material-ui/core/styles/colorManipulator';
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
        <Toolbar>
          <Button
            variant="contained"
            color="primary"
            className={classes.backButton}
            onClick={handleBackClick}
          >
            <ArrowBackIcon className={classes.icon} />
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.saveButton}
            onClick={handleBackClick}
          >
            <SaveIcon className={classes.icon} />
            Save
          </Button>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon} />
          </div>
        </Toolbar>
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
    backButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    saveButton: {
      marginLeft: theme.spacing.unit * 24,
    },
    icon: {
      marginRight: theme.spacing.unit,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    grow: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto',
      },
    },
  })),
  withRouter,
)(OverviewFooterComponent);
