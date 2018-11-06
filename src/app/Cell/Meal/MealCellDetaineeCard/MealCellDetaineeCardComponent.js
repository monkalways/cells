import React from 'react';
import PropTypes from 'prop-types';
import { Card, withStyles } from '@material-ui/core';

import {
  CellDetaineeCardHeader,
  CellDetaineeCardContent,
} from '../../CellDetaineeCard';

import MealCellDetaineeCardFooter from './MealCellDetaineeCardFooter';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetainee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
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

const MealCellDetaineeCardComponent = ({
  classes,
  cellDetainee,
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
      isAuthenticated={isAuthenticated}
    />
    <MealCellDetaineeCardFooter
      meal={meal}
      onAcceptClick={onAcceptClick}
      onRejectClick={onRejectClick}
      onNotApplicableClick={onNotApplicableClick}
    />
  </Card>
);

MealCellDetaineeCardComponent.propTypes = propTypes;
MealCellDetaineeCardComponent.defaultProps = defaultProps;

export default withStyles((theme) => ({
  card: {
    maxWidth: theme.spacing.unit * 50,
    backgroundColor: '#EBEBEB',
  },
}))(MealCellDetaineeCardComponent);
