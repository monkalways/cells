import React from 'react';
import PropTypes from 'prop-types';
import { CardActions, IconButton, withStyles } from '@material-ui/core';

import MedicineAcceptIcon from '../../../../images/MedicineAccept.png';
import MedicineDeclineIcon from '../../../../images/MedicineDecline.png';
import NotApplicableIcon from '../../../../images/NotApplicable.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const MedicineCellDetaineeCardFooterComponent = ({ classes }) => (
  <CardActions className={classes.actions} disableActionSpacing>
    <IconButton
      classes={{
        root: classes.button,
        disabled: classes.buttonDisabled,
      }}
    >
      <img
        src={MedicineAcceptIcon}
        alt="Medicine accept"
        className={classes.img}
      />
    </IconButton>
    <IconButton
      classes={{
        root: classes.button,
        disabled: classes.buttonDisabled,
      }}
      disabled
    >
      <img
        src={MedicineDeclineIcon}
        alt="Medicine decline"
        className={classes.img}
      />
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

MedicineCellDetaineeCardFooterComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  actions: {
    display: 'flex',
    height: theme.spacing.unit * 9,
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: 0,
  },
  buttonDisabled: {
    margin: theme.spacing.unit,
    marginLeft: 0,
    opacity: 0.2,
  },
  img: {
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
  },
}))(MedicineCellDetaineeCardFooterComponent);
