import React from 'react';
import PropTypes from 'prop-types';
import { Card, withStyles } from '@material-ui/core';

import {
  CellDetaineeCardHeader,
  CellDetaineeCardContent,
} from '../../CellDetaineeCard';

import CellCheckCellDetaineeCardFooter from './CellCheckCellDetaineeCardFooter';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetainee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  visual: PropTypes.bool.isRequired,
  verbal: PropTypes.bool.isRequired,
  onVisualClick: PropTypes.func.isRequired,
  onVerbalClick: PropTypes.func.isRequired,
};

const CellCheckCellDetaineeCardComponent = ({
  classes,
  cellDetainee,
  isAuthenticated,
  visual,
  verbal,
  onVisualClick,
  onVerbalClick,
}) => (
  <Card className={classes.card}>
    <CellDetaineeCardHeader cellDetainee={cellDetainee} />
    <CellDetaineeCardContent
      cellDetainee={cellDetainee}
      isAuthenticated={isAuthenticated}
    />
    <CellCheckCellDetaineeCardFooter
      visual={visual}
      verbal={verbal}
      onVisualClick={onVisualClick}
      onVerbalClick={onVerbalClick}
    />
  </Card>
);

CellCheckCellDetaineeCardComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  card: {
    maxWidth: theme.spacing.unit * 50,
    backgroundColor: '#EBEBEB',
  },
}))(CellCheckCellDetaineeCardComponent);
