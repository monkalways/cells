import React from 'react';
import PropTypes from 'prop-types';
import { CardActions, IconButton, withStyles } from '@material-ui/core';

import WellnessVisualIcon from '../../../../images/WellnessVisual.png';
import WellnessVerbalIcon from '../../../../images/WellnessVerbal.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const OverviewCellDetaineeCardFooterComponent = ({ classes }) => (
  <CardActions className={classes.actions} disableActionSpacing>
    <IconButton
      classes={{
        root: classes.leftButton,
        disabled: classes.leftButtonDisabled,
      }}
    >
      <img
        src={WellnessVisualIcon}
        alt="wellness visual"
        className={classes.img}
      />
    </IconButton>
    <IconButton
      classes={{
        root: classes.leftButton,
        disabled: classes.rightButtonDisabled,
      }}
      disabled
    >
      <img
        src={WellnessVerbalIcon}
        alt="wellness verbal"
        className={classes.img}
      />
    </IconButton>
  </CardActions>
);

OverviewCellDetaineeCardFooterComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  actions: {
    display: 'flex',
    height: theme.spacing.unit * 9,
  },
  leftButton: {
    margin: theme.spacing.unit,
  },
  leftButtonDisabled: {
    margin: theme.spacing.unit,
    opacity: 0.2,
  },
  rightButton: {
    marginLeft: theme.spacing.unit * 7,
    margin: theme.spacing.unit,
  },
  rightButtonDisabled: {
    marginLeft: theme.spacing.unit * 7,
    margin: theme.spacing.unit,
    opacity: 0.2,
  },
  img: {
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
  },
}))(OverviewCellDetaineeCardFooterComponent);
