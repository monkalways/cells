import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';
import detaineeImage from './detainee.PNG';
import PersonalStats from './PersonalStats';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({}).isRequired,
};

const PersonalInformationComponent = ({ classes, detainee }) => {
  const getDetaineeImage = () => {
    const { intakePhotoResourceUri } = detainee;
    if (intakePhotoResourceUri) {
      return intakePhotoResourceUri;
    }
    return detaineeImage;
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.text}>
            Personal Information
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <img
            className={classes.img}
            alt="Detainee"
            src={getDetaineeImage()}
          />
        </Grid>
        <Grid item sm={8}>
          <PersonalStats detainee={detainee} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

PersonalInformationComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  img: {
    width: '150px',
    height: '150px',
  },
  column: {
    padding: theme.spacing.unit * 0.5,
  },
  text: {
    textDecorationLine: 'underline',
  },
}))(PersonalInformationComponent);
