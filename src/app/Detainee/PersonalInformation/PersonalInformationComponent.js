import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Paper, Typography, withStyles,
} from '@material-ui/core';
import detaineeImage from './detainee.PNG';
import PersonalStats from './PersonalStats';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({}).isRequired,
};

const PersonalInformationComponent = ({ classes, detainee }) => {
  console.log(detainee);

  const getDetaineeImage = () => {
    const { intakePhotoResourceUri } = detainee;
    if (intakePhotoResourceUri) {
      return intakePhotoResourceUri;
    }
    return detaineeImage;
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="space-between"
        className={classes.column}
        spacing={8}
      >
        <Grid item>
          <Typography>Personal Information</Typography>
        </Grid>
        <Grid item>
          <Grid container alignItems="flex-start" justify="flex-start">
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
  row: {
    padding: theme.spacing.unit * 0.5,
  },
  column: {
    padding: theme.spacing.unit * 0.5,
  },
}))(PersonalInformationComponent);
