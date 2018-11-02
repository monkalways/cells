import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellName: PropTypes.string.isRequired,
};

const HeaderContent = ({ classes, cellName }) => (
  <React.Fragment>
    <Typography variant="h4" align="center" className={classes.root}>
      {`Cell: ${cellName}`}
    </Typography>
  </React.Fragment>
);

HeaderContent.propTypes = propTypes;

export default withStyles(() => ({
  root: {
    flexGrow: 1,
  },
}))(HeaderContent);
