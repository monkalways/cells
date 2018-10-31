import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

import CellDetaineeCard from '../CellDetaineeCard';
import OverviewFooter from './OverviewFooter';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetainees: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const OverviewComponent = ({ classes, cellDetainees }) => (
  <React.Fragment>
    <Grid container className={classes.container} spacing={8}>
      {cellDetainees.map((cellDetainee) => (
        <Grid key={cellDetainee.id} item sm={4}>
          <CellDetaineeCard cellDetainee={cellDetainee} />
        </Grid>
      ))}
    </Grid>
    <OverviewFooter />
  </React.Fragment>
);

OverviewComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  container: {
    height: theme.spacing.unit * 105,
    overflowY: 'scroll',
    marginBottom: theme.spacing.unit,
  },
}))(OverviewComponent);
