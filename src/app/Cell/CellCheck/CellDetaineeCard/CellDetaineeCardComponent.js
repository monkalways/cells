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
  cellCheck: PropTypes.shape({
    visual: PropTypes.bool.isRequired,
    verbal: PropTypes.bool.isRequired,
  }),
  onVisualClick: PropTypes.func,
  onVerbalClick: PropTypes.func,
};

const defaultProps = {
  cellCheck: null,
  onVisualClick: null,
  onVerbalClick: null,
};

export const CellDetaineeCardComponent = ({
  classes,
  cellDetainee,
  cellName,
  isAuthenticated,
  cellCheck,
  onVisualClick,
  onVerbalClick,
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
      cellCheck={cellCheck}
      onVisualClick={onVisualClick}
      onVerbalClick={onVerbalClick}
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
