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
  detainee: PropTypes.shape({}).isRequired,
  usage: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isCheckingIn: PropTypes.bool.isRequired,
  isCheckingInSuccess: PropTypes.bool.isRequired,
  onCheckIn: PropTypes.func.isRequired,
  checkingInDetaineeId: PropTypes.string,
};

const defaultProps = {
  checkingInDetaineeId: null,
};

export const ActivityRoomDetaineeCardComponent = ({
  classes,
  detainee,
  usage,
  isAuthenticated,
  isCheckingIn,
  isCheckingInSuccess,
  onCheckIn,
  checkingInDetaineeId,
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
      isCheckingInSuccess={isCheckingInSuccess}
      onCheckIn={onCheckIn}
      checkingInDetaineeId={checkingInDetaineeId}
    />
  </Card>
);

ActivityRoomDetaineeCardComponent.propTypes = propTypes;
ActivityRoomDetaineeCardComponent.defaultProps = defaultProps;

export default withStyles((theme) => ({
  card: {
    maxWidth: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
  },
}))(ActivityRoomDetaineeCardComponent);
