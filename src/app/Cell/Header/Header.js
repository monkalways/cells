import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, IconButton, Toolbar, withStyles,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import logoIcon from './eps-logo-icon.png';
import HeaderContent from './HeaderContent';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genderLabel: PropTypes.string.isRequired,
    occupancy: PropTypes.number.isRequired,
    occupancyCount: PropTypes.number.isRequired,
    cellStatus: PropTypes.string.isRequired,
  }).isRequired,
  onLogout: PropTypes.func.isRequired,
};

const Header = ({ classes, cellDetails, onLogout }) => (
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
        <HeaderContent cellDetails={cellDetails} />
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