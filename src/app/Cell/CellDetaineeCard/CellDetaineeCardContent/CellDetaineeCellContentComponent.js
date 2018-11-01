import React from 'react';
import PropTypes from 'prop-types';
import { CardMedia, withStyles } from '@material-ui/core';

import detaineeImage from './detainee.PNG';
import detaineeAnonymousImage from './detainee-anonymous.PNG';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetainee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const CellDetaineeCardContentComponent = ({
  classes,
  cellDetainee,
  isAuthenticated,
}) => {
  const getDetaineeImage = () => {
    if (isAuthenticated) {
      const { intakePhotoResourceUri } = cellDetainee;
      if (intakePhotoResourceUri) {
        return intakePhotoResourceUri;
      }
      return detaineeImage;
    }
    return detaineeAnonymousImage;
  };
  return (
    <CardMedia
      className={classes.media}
      image={getDetaineeImage()}
      title={`${cellDetainee.firstName} ${cellDetainee.lastName}`}
    />
  );
};

CellDetaineeCardContentComponent.propTypes = propTypes;

export default withStyles(() => ({
  media: {
    height: 0,
    paddingTop: '66.25%', // 16:9
  },
}))(CellDetaineeCardContentComponent);
