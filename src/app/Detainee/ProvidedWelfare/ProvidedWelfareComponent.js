import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Divider,
  Grid,
  Typography,
  withStyles,
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

const gridSpacing = 1;
const variant = 'subtitle2';

const ProvidedWelfareComponent = ({ classes, detainee }) => (
  <Grid container spacing={8} className={classes.grid}>
    <Grid item xs={12}>
      <Typography variant="subtitle2">Provided Welfare</Typography>
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={16}>
        <Grid item xs={gridSpacing}>
          <Avatar className={classes.avatar} src={VisualCheckIcon} />
        </Grid>
        <Grid item xs={gridSpacing}>
          <Avatar className={classes.avatar} src={VerbalCheckIcon} />
        </Grid>
        <Grid item xs={gridSpacing}>
          <Avatar className={classes.avatar} src={MealAcceptIcon} />
        </Grid>
        <Grid item xs={gridSpacing}>
          <Avatar className={classes.avatar} src={MealDeclineIcon} />
        </Grid>
        <Grid item xs={gridSpacing}>
          <Avatar className={classes.avatar} src={MedicineAcceptIcon} />
        </Grid>
        <Grid item xs={gridSpacing}>
          <Avatar className={classes.avatar} src={MedicineDeclineIcon} />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Divider />
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={16}>
        <Grid item xs={gridSpacing}>
          <Typography variant={variant} align="center">
            {detainee.visualCellCheckCount}
          </Typography>
        </Grid>
        <Grid item xs={gridSpacing}>
          <Typography variant={variant} align="center">
            {detainee.verbalCellCheckCount}
          </Typography>
        </Grid>
        <Grid item xs={gridSpacing}>
          <Typography variant={variant} align="center">
            {detainee.mealAcceptedCount}
          </Typography>
        </Grid>
        <Grid item xs={gridSpacing}>
          <Typography variant={variant} align="center">
            {detainee.mealDeclinedCount}
          </Typography>
        </Grid>
        <Grid item xs={gridSpacing}>
          <Typography variant={variant} align="center">
            {detainee.medicationAcceptedCount}
          </Typography>
        </Grid>
        <Grid item xs={gridSpacing}>
          <Typography variant={variant} align="center">
            {detainee.medicationRefusedCount}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
ProvidedWelfareComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  avatar: {
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
  },
  grid: {
    padding: theme.spacing.unit * 0.5,
  },
}))(ProvidedWelfareComponent);
