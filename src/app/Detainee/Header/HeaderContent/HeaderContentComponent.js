import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellName: PropTypes.string.isRequired,
};

const HeaderContent = ({ classes, cellName }) => (
  <Grid container justify="center" className={classes.grid}>
    <Grid item sm={5}>
      <Typography variant="h4" className={classes.headerTitle}>
        Cell:
      </Typography>
      <Typography variant="h4" className={classes.headerContent}>
        {cellName}
      </Typography>
    </Grid>
  </Grid>
);

HeaderContent.propTypes = propTypes;

export default withStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerTitle: {
    display: 'inline',
    color: 'red',
    marginRight: theme.spacing.unit,
  },
  headerContent: {
    display: 'inline',
  },
}))(HeaderContent);
