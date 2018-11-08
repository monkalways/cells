import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  withStyles,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import logoIcon from './eps-logo-icon.png';
import HeaderContent from './HeaderContent';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({}),
  isDetaineeProfileLoaded: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const defaultProps = {
  detainee: null,
};

const Header = ({
  classes, detainee, isDetaineeProfileLoaded, onLogout,
}) => (
  <div className={classes.root}>
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <img src={logoIcon} alt="EPS Logo" width={70} />
        </IconButton>
        {isDetaineeProfileLoaded ? (
          <HeaderContent
            detainee={detainee}
            isDetaineeProfileLoaded={isDetaineeProfileLoaded}
          />
        ) : (
          <Grid item xs={12} />
        )}
        <IconButton
          className={classes.logoutButton}
          color="inherit"
          aria-label="Menu"
          onClick={onLogout}
        >
          <CloseIcon className={classes.logoutIcon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default withStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#A8C6FA', // TODO: move color to theme
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logoutButton: {
    margin: theme.spacing.unit,
    backgroundColor: '#444480',
    color: '#F10607',
    '&:hover': {
      backgroundColor: '#444480',
    },
  },
  logoutIcon: {
    fontSize: theme.typography.h4.fontSize,
  },
}))(Header);
