import React from 'react';
import PropTypes from 'prop-types';
import { CardActions, IconButton, withStyles } from '@material-ui/core';

import MealAcceptIcon from '../../../../images/MealAccept.png';
import MealDeclineIcon from '../../../../images/MealDecline.png';
import NotApplicableIcon from '../../../../images/NotApplicable.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  meal: PropTypes.shape({
    accept: PropTypes.bool.isRequired,
    reject: PropTypes.bool.isRequired,
    notApplicable: PropTypes.bool.isRequired,
  }),
  onAcceptClick: PropTypes.func.isRequired,
  onRejectClick: PropTypes.func.isRequired,
  onNotApplicableClick: PropTypes.func.isRequired,
};

const defaultProps = {
  meal: null,
};

const CardFooterComponent = ({
  classes,
  meal,
  onAcceptClick,
  onRejectClick,
  onNotApplicableClick,
}) => (
  <CardActions className={classes.actions} disableActionSpacing>
    {meal && (
      <React.Fragment>
        <IconButton
          className={meal.accept ? classes.buttonSelected : classes.button}
          onClick={onAcceptClick}
        >
          <img src={MealAcceptIcon} alt="meal accept" className={classes.img} />
        </IconButton>
        <IconButton
          className={meal.reject ? classes.buttonSelected : classes.button}
          onClick={onRejectClick}
        >
          <img
            src={MealDeclineIcon}
            alt="meal decline"
            className={classes.img}
          />
        </IconButton>
        <IconButton
          className={
            meal.notApplicable ? classes.buttonSelected : classes.button
          }
          onClick={onNotApplicableClick}
        >
          <img
            src={NotApplicableIcon}
            alt="not applicable"
            className={classes.img}
            disabled
          />
        </IconButton>
      </React.Fragment>
    )}
  </CardActions>
);

CardFooterComponent.propTypes = propTypes;
CardFooterComponent.defaultProps = defaultProps;

export default withStyles((theme) => ({
  actions: {
    display: 'flex',
    height: theme.spacing.unit * 9,
  },
  button: {
    margin: 0,
    opacity: 0.2,
  },
  buttonSelected: {
    margin: 0,
  },
  img: {
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
  },
}))(CardFooterComponent);
