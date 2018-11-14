import React from 'react';
import PropTypes from 'prop-types';
import { Card, withStyles } from '@material-ui/core';

import {
  CellDetaineeCardHeader,
  CellDetaineeCardContent,
} from '../../common/CellDetaineeCard';
import CardFooter from './CardFooter';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  usage: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isCheckingIn: PropTypes.bool.isRequired,
  onCheckIn: PropTypes.func.isRequired,
};

const ActivityRoomDetaineeCardComponent = ({
  classes,
  detainee,
  usage,
  isAuthenticated,
  isCheckingIn,
  onCheckIn,
}) => (
  <Card className={classes.card}>
    <CellDetaineeCardHeader cellDetainee={detainee} />
    <CellDetaineeCardContent
      cellDetainee={detainee}
      first="activity-rooms"
      second={usage}
      isAuthenticated={isAuthenticated}
    />
    <CardFooter
      usage={usage}
      detainee={detainee}
      isAuthenticated={isAuthenticated}
      isCheckingIn={isCheckingIn}
      onCheckIn={onCheckIn}
    />
  </Card>
);

ActivityRoomDetaineeCardComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  card: {
    maxWidth: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
  },
}))(ActivityRoomDetaineeCardComponent);
