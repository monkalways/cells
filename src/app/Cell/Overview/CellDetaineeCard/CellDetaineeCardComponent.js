import React from 'react';
import PropTypes from 'prop-types';
import { Card, withStyles } from '@material-ui/core';

import {
  CellDetaineeCardHeader,
  CellDetaineeCardContent,
} from '../../../common/CellDetaineeCard';

import CardFooter from './CardFooter';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetainee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  cellName: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export const CellDetaineeCardComponent = ({
  classes,
  cellDetainee,
  cellName,
  isAuthenticated,
}) => (
  <Card className={classes.card}>
    <CellDetaineeCardHeader cellDetainee={cellDetainee} />
    <CellDetaineeCardContent
      cellDetainee={cellDetainee}
      first="cells"
      second={cellName}
      isAuthenticated={isAuthenticated}
    />
    <CardFooter cellDetainee={cellDetainee} isAuthenticated={isAuthenticated} />
  </Card>
);

CellDetaineeCardComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  card: {
    maxWidth: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
  },
}))(CellDetaineeCardComponent);
