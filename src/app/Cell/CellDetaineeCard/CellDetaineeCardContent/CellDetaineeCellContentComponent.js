import React from 'react';
import PropTypes from 'prop-types';
import { CardMedia, withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import detaineeImage from './detainee.PNG';
import detaineeAnonymousImage from './detainee-anonymous.PNG';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetainee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const CellDetaineeCardContentComponent = ({
  classes,
  cellDetainee,
  isAuthenticated,
  history,
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

  const handleClick = () => {
    if (isAuthenticated) {
      history.push(`/detainees/${cellDetainee.id}`);
    }
  };

  return (
    <CardMedia
      className={classes.media}
      image={getDetaineeImage()}
      title={`${cellDetainee.firstName} ${cellDetainee.lastName}`}
      onClick={handleClick}
    />
  );
};

CellDetaineeCardContentComponent.propTypes = propTypes;

export default compose(
  withStyles(() => ({
    media: {
      height: 0,
      paddingTop: '66.25%', // 16:9
    },
  })),
  withRouter,
)(CellDetaineeCardContentComponent);
