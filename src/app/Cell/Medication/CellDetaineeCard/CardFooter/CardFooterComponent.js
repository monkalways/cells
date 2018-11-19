import React from 'react';
import PropTypes from 'prop-types';
import { CardActions, IconButton, withStyles } from '@material-ui/core';

import MedicineAcceptIcon from '../../../../images/MedicineAccept.png';
import MedicineDeclineIcon from '../../../../images/MedicineDecline.png';
import NotApplicableIcon from '../../../../images/NotApplicable.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  medication: PropTypes.shape({
    accept: PropTypes.bool.isRequired,
    reject: PropTypes.bool.isRequired,
    notApplicable: PropTypes.bool.isRequired,
  }),
  onAcceptClick: PropTypes.func.isRequired,
  onRejectClick: PropTypes.func.isRequired,
  onNotApplicableClick: PropTypes.func.isRequired,
};

const defaultProps = {
  medication: null,
};

const CardFooterComponent = ({
  classes,
  medication,
  onAcceptClick,
  onRejectClick,
  onNotApplicableClick,
}) => (
  <CardActions className={classes.actions} disableActionSpacing>
    {medication && (
      <React.Fragment>
        <IconButton
          className={
            medication.accept ? classes.buttonSelected : classes.button
          }
          onClick={onAcceptClick}
        >
          <img
            src={MedicineAcceptIcon}
            alt="Medicine accept"
            className={classes.img}
          />
        </IconButton>
        <IconButton
          className={
            medication.reject ? classes.buttonSelected : classes.button
          }
          onClick={onRejectClick}
        >
          <img
            src={MedicineDeclineIcon}
            alt="Medicine decline"
            className={classes.img}
          />
        </IconButton>
        <IconButton
          className={
            medication.notApplicable ? classes.buttonSelected : classes.button
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
