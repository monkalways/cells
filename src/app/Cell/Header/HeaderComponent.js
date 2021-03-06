import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  AppBar, IconButton, Toolbar, withStyles,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import logoIcon from '../../images/eps-logo-icon.png';
import HeaderContent from './HeaderContent';
import HeaderMenu from './HeaderMenu';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetails: PropTypes.shape({}).isRequired,
  onLogout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export const HeaderComponent = ({
  classes,
  cellDetails,
  onLogout,
  isAuthenticated,
}) => (
  <div className={classNames(classes.root, 'no-print')}>
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        {isAuthenticated && <HeaderMenu cellDetails={cellDetails} />}
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          disabled
        >
          <img src={logoIcon} alt="EPS Logo" width={70} />
        </IconButton>
        <HeaderContent cellDetails={cellDetails} />
        {isAuthenticated && (
          <IconButton
            id="logoutButton"
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

HeaderComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
  menuButton: {
    marginLeft: -theme.spacing.unit * 2.5,
    marginRight: theme.spacing.unit * 0.8,
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
}))(HeaderComponent);
