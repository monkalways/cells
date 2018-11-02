import React from 'react';
import PropTypes from 'prop-types';
import { CardActions, IconButton, withStyles } from '@material-ui/core';

import MealAcceptIcon from '../../../../images/MealAccept.png';
import MealDeclineIcon from '../../../../images/MealDecline.png';
import NotApplicableIcon from '../../../../images/NotApplicable.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const MealCellDetaineeCardFooterComponent = ({ classes }) => (
  <CardActions className={classes.actions} disableActionSpacing>
    <IconButton
      classes={{
        root: classes.button,
        disabled: classes.buttonDisabled,
      }}
    >
      <img src={MealAcceptIcon} alt="meal accept" className={classes.img} />
    </IconButton>
    <IconButton
      classes={{
        root: classes.button,
        disabled: classes.buttonDisabled,
      }}
      disabled
    >
      <img src={MealDeclineIcon} alt="meal decline" className={classes.img} />
    </IconButton>
    <IconButton
      classes={{
        root: classes.button,
        disabled: classes.buttonDisabled,
      }}
      disabled
    >
      <img
        src={NotApplicableIcon}
        alt="not applicable"
        className={classes.img}
        disabled
      />
    </IconButton>
  </CardActions>
);

MealCellDetaineeCardFooterComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  actions: {
    display: 'flex',
    height: theme.spacing.unit * 9,
  },
  button: {
    margin: 0,
  },
  buttonDisabled: {
    margin: 0,
    opacity: 0.2,
  },
  img: {
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
  },
}))(MealCellDetaineeCardFooterComponent);
