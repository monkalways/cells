import React from 'react';
import PropTypes from 'prop-types';
import { CardActions, IconButton, withStyles } from '@material-ui/core';

import WellnessVisualIcon from '../../../../images/WellnessVisual.png';
import WellnessVerbalIcon from '../../../../images/WellnessVerbal.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  visual: PropTypes.bool.isRequired,
  verbal: PropTypes.bool.isRequired,
  onVisualClick: PropTypes.func.isRequired,
  onVerbalClick: PropTypes.func.isRequired,
};

const CellCheckCellDetaineeCardFooterComponent = ({
  classes,
  visual,
  verbal,
  onVisualClick,
  onVerbalClick,
}) => (
  <CardActions className={classes.actions} disableActionSpacing>
    <IconButton
      className={visual ? classes.leftButtonSelected : classes.leftButton}
      onClick={onVisualClick}
    >
      <img
        src={WellnessVisualIcon}
        alt="wellness visual"
        className={classes.img}
      />
    </IconButton>
    <IconButton
      className={verbal ? classes.rightButtonSelected : classes.rightButton}
      onClick={onVerbalClick}
    >
      <img
        src={WellnessVerbalIcon}
        alt="wellness verbal"
        className={classes.img}
      />
    </IconButton>
  </CardActions>
);

CellCheckCellDetaineeCardFooterComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  actions: {
    display: 'flex',
    height: theme.spacing.unit * 9,
  },
  leftButton: {
    margin: theme.spacing.unit,
    opacity: 0.2,
  },
  leftButtonSelected: {
    margin: theme.spacing.unit,
  },
  rightButton: {
    marginLeft: theme.spacing.unit * 5,
    margin: theme.spacing.unit,
    opacity: 0.2,
  },
  rightButtonSelected: {
    marginLeft: theme.spacing.unit * 5,
    margin: theme.spacing.unit,
  },
  img: {
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
  },
}))(CellCheckCellDetaineeCardFooterComponent);
