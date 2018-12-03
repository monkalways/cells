import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContent, Grid, Typography, withStyles,
} from '@material-ui/core';

import LocationIcon from '../../LocationIcon';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetainee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    division: PropTypes.arrayOf(PropTypes.string).isRequired,
    location: PropTypes.string,
  }).isRequired,
};

export const CellDetaineeCardHeaderComponent = ({ classes, cellDetainee }) => (
  <CardContent className={classes.header}>
    <Grid container>
      <Grid item sm={7}>
        <Typography variant="h6" className={classes.heading}>
          {cellDetainee.lastName}
        </Typography>
        <Typography variant="h6" className={classes.heading}>
          {cellDetainee.firstName}
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          {`${cellDetainee.division.join(',')}`}
        </Typography>
      </Grid>
      <Grid item sm={5}>
        <LocationIcon location={cellDetainee.location} />
      </Grid>
    </Grid>
  </CardContent>
);

CellDetaineeCardHeaderComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  header: {
    padding: theme.spacing.unit,
  },
  heading: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  subtitle: {
    color: '#7B2C31',
  },
}))(CellDetaineeCardHeaderComponent);
