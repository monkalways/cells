import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Grid, Typography, withStyles,
} from '@material-ui/core';

import VisualCheckIcon from '../../../images/WellnessVisual.png';
import VerbalCheckIcon from '../../../images/WellnessVerbal.png';
import MealAcceptIcon from '../../../images/MealAccept.png';
import MealDeclineIcon from '../../../images/MealDecline.png';
import MedicineAcceptIcon from '../../../images/MedicineAccept.png';
import MedicineDeclineIcon from '../../../images/MedicineDecline.png';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    mealAcceptedCount: PropTypes.number.isRequired,
    mealDeclinedCount: PropTypes.number.isRequired,
    medicationAcceptedCount: PropTypes.number.isRequired,
    medicationRefusedCount: PropTypes.number.isRequired,
    verbalCellCheckCount: PropTypes.number.isRequired,
    visualCellCheckCount: PropTypes.number.isRequired,
  }).isRequired,
};

const variant = 'h6';

const ProvidedWelfareComponent = ({ classes, detainee }) => (
  <Grid container className={classes.grid}>
    <Grid item xs={12}>
      <Typography variant="h5" className={classes.text}>
        Provided Welfare
      </Typography>
    </Grid>
    <Grid container item xs={12}>
      <Grid item className={`${classes.gridItem} ${classes.topLeft}`}>
        <Avatar className={classes.avatar} src={VisualCheckIcon} />
      </Grid>
      <Grid item className={`${classes.gridItem} ${classes.topCenter}`}>
        <Avatar className={classes.avatar} src={VerbalCheckIcon} />
      </Grid>
      <Grid item className={`${classes.gridItem} ${classes.topCenter}`}>
        <Avatar className={classes.avatar} src={MealAcceptIcon} />
      </Grid>
      <Grid item className={`${classes.gridItem} ${classes.topCenter}`}>
        <Avatar className={classes.avatar} src={MealDeclineIcon} />
      </Grid>
      <Grid item className={`${classes.gridItem} ${classes.topCenter}`}>
        <Avatar className={classes.avatar} src={MedicineAcceptIcon} />
      </Grid>
      <Grid item className={`${classes.gridItem} ${classes.topRight}`}>
        <Avatar className={classes.avatar} src={MedicineDeclineIcon} />
      </Grid>
    </Grid>

    <Grid container item xs={12}>
      <Grid item className={`${classes.gridItem} ${classes.bottomLeft}`}>
        <Typography variant={variant} align="center">
          {detainee.visualCellCheckCount}
        </Typography>
      </Grid>
      <Grid item className={`${classes.gridItem} ${classes.bottomCenter}`}>
        <Typography variant={variant} align="center">
          {detainee.verbalCellCheckCount}
        </Typography>
      </Grid>
      <Grid item className={`${classes.gridItem} ${classes.bottomCenter}`}>
        <Typography variant={variant} align="center">
          {detainee.mealAcceptedCount}
        </Typography>
      </Grid>
      <Grid item className={`${classes.gridItem} ${classes.bottomCenter}`}>
        <Typography variant={variant} align="center">
          {detainee.mealDeclinedCount}
        </Typography>
      </Grid>
      <Grid item className={`${classes.gridItem} ${classes.bottomCenter}`}>
        <Typography variant={variant} align="center">
          {detainee.medicationAcceptedCount}
        </Typography>
      </Grid>
      <Grid item className={`${classes.gridItem} ${classes.bottomRight}`}>
        <Typography variant={variant} align="center">
          {detainee.medicationRefusedCount}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);
ProvidedWelfareComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  avatar: {
    height: theme.spacing.unit * 8,
    width: theme.spacing.unit * 8,
  },
  bottomLeft: { borderWidth: '1px 1px 0 0' },
  bottomCenter: { borderWidth: '1px 1px 0 1px' },
  bottomRight: { borderWidth: '1px 0 0 1px' },
  grid: {
    padding: theme.spacing.unit * 0.5,
  },
  gridItem: {
    borderStyle: 'solid',
    borderColor: 'black',
    padding: theme.spacing.unit * 0.5,
    width: theme.spacing.unit * 10,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    textDecoration: 'underline',
  },
  topLeft: { borderWidth: '0 1px 1px 0' },
  topCenter: { borderWidth: '0 1px 1px 1px' },
  topRight: { borderWidth: '0 0 1px 1px' },
}))(ProvidedWelfareComponent);
