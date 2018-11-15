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
          <Typography variant="h5" className={classes.text}>
            Personal Information
          </Typography>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <img
              className={classes.img}
              alt="Detainee"
              src={getDetaineeImage()}
            />
          </Grid>
          <Grid item xs={9}>
            <PersonalStats detainee={detainee} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

PersonalInformationComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  img: {
    objectFit: 'cover',
    height: theme.spacing.unit * 18.5,
    width: theme.spacing.unit * 18.5,
    paddingTop: theme.spacing.unit * 0.5,
    paddingRight: theme.spacing.unit,
  },
  text: {
    textDecoration: 'underline',
  },
}))(PersonalInformationComponent);
