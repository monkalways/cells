import React from 'react';
import PropTypes from 'prop-types';
import { Card, withStyles } from '@material-ui/core';

import {
  CellDetaineeCardHeader,
  CellDetaineeCardContent,
} from '../../common/CellDetaineeCard';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  usage: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const ActivityRoomDetaineeCardComponent = ({
  classes,
  detainee,
  usage,
  isAuthenticated,
}) => (
  <Card className={classes.card}>
    <CellDetaineeCardHeader cellDetainee={detainee} />
    <CellDetaineeCardContent
      cellDetainee={detainee}
      cellName={usage}
      isAuthenticated={isAuthenticated}
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
