import React from 'react';
import PropTypes from 'prop-types';
import { Card, withStyles } from '@material-ui/core';

import CellDetaineeCardHeader from './CellDetaineeCardHeader';
import CellDetaineeCardFooter from './CellDetaineeCardFooter';
import detaineeImage from './detainee.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetainee: PropTypes.shape({}).isRequired, // TODO: expand detainee properties
};

const CellDetaineeCardComponent = ({ classes, cellDetainee }) => {
  const getDetaineeImage = () => {
    const { intakePhotoResourceUri } = cellDetainee;
    if (intakePhotoResourceUri) {
      return intakePhotoResourceUri;
    }
    return detaineeImage;
  };
  return (
    <Card className={classes.card}>
      <CellDetaineeCardHeader cellDetainee={cellDetainee} />

      <img className={classes.media} src={getDetaineeImage()} alt="detainee" />

      <CellDetaineeCardFooter cellDetainee={cellDetainee} />
    </Card>
  );
};

CellDetaineeCardComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  card: {
    maxWidth: theme.spacing.unit * 50,
    backgroundColor: '#EBEBEB',
  },
  media: {
    height: 168,
    display: 'block',
    backgroundSize: 'cover',
    margin: 'auto',
  },
}))(CellDetaineeCardComponent);
