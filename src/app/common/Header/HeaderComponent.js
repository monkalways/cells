import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, withStyles,
} from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  versions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
  })).isRequired,
};

export const HeaderComponent = ({ classes, versions }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        id="title"
        variant="h6"
        color="inherit"
        className={classes.heading}
      >
        Cell App - Detainee Management Unit
      </Typography>
      <div>
        {versions
          && versions.map((version) => (
            <Typography
              id="version"
              color="inherit"
              align="right"
              key={version.name}
            >
              {version.name}: {version.version}
            </Typography>
          ))}
      </div>
    </Toolbar>
  </AppBar>
);

HeaderComponent.propTypes = propTypes;

export default withStyles(() => ({
  heading: {
    flex: 1,
  },
}))(HeaderComponent);
