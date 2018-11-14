import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, IconButton, Toolbar, withStyles,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import HeaderContent from './HeaderContent';
import logoIcon from '../../images/eps-logo-icon.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  usage: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const Header = ({
  classes, usage, onLogout, isAuthenticated,
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
        <HeaderContent usage={usage} />
        {isAuthenticated && (
          <IconButton
            className={classes.logoutButton}
            color="inherit"
            aria-label="Menu"
            onClick={onLogout}
          >
            <CloseIcon className={classes.logoutIcon} />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = propTypes;

export default withStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
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
