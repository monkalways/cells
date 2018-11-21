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

export const CellDetaineeCardComponent = ({
  classes,
  cellDetainee,
  cellName,
  isAuthenticated,
  meal,
  onAcceptClick,
  onRejectClick,
  onNotApplicableClick,
}) => (
  <Card className={classes.card}>
    <CellDetaineeCardHeader cellDetainee={cellDetainee} />
    <CellDetaineeCardContent
      cellDetainee={cellDetainee}
      first="cells"
      second={cellName}
      isAuthenticated={isAuthenticated}
    />
    <CardFooter
      meal={meal}
      onAcceptClick={onAcceptClick}
      onRejectClick={onRejectClick}
      onNotApplicableClick={onNotApplicableClick}
    />
  </Card>
);

CellDetaineeCardComponent.propTypes = propTypes;
CellDetaineeCardComponent.defaultProps = defaultProps;

export default withStyles((theme) => ({
  card: {
    maxWidth: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
  },
}))(CellDetaineeCardComponent);
