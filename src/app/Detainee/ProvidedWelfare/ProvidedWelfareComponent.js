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

const variant = 'subtitle2';

const ProvidedWelfareComponent = ({ classes, detainee }) => (
  <Grid container className={classes.grid}>
    <Grid item xs={12}>
      <Typography variant="h6" className={classes.text}>
        Provided Welfare
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={1} className={`${classes.gridItem} ${classes.topLeft}`}>
          <Avatar className={classes.avatar} src={VisualCheckIcon} />
        </Grid>
        <Grid
          item
          xs={1}
          className={`${classes.gridItem} ${classes.topCenter}`}
        >
          <Avatar className={classes.avatar} src={VerbalCheckIcon} />
        </Grid>
        <Grid
          item
          xs={1}
          className={`${classes.gridItem} ${classes.topCenter}`}
        >
          <Avatar className={classes.avatar} src={MealAcceptIcon} />
        </Grid>
        <Grid
          item
          xs={1}
          className={`${classes.gridItem} ${classes.topCenter}`}
        >
          <Avatar className={classes.avatar} src={MealDeclineIcon} />
        </Grid>
        <Grid
          item
          xs={1}
          className={`${classes.gridItem} ${classes.topCenter}`}
        >
          <Avatar className={classes.avatar} src={MedicineAcceptIcon} />
        </Grid>
        <Grid item xs={1} className={`${classes.gridItem} ${classes.topRight}`}>
          <Avatar className={classes.avatar} src={MedicineDeclineIcon} />
        </Grid>
      </Grid>
    </Grid>

    <Grid item xs={12}>
      <Grid container>
        <Grid
          item
          xs={1}
          className={`${classes.gridItem} ${classes.bottomLeft}`}
        >
          <Typography variant={variant} align="center">
            {detainee.visualCellCheckCount}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          className={`${classes.gridItem} ${classes.bottomCenter}`}
        >
          <Typography variant={variant} align="center">
            {detainee.verbalCellCheckCount}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          className={`${classes.gridItem} ${classes.bottomCenter}`}
        >
          <Typography variant={variant} align="center">
            {detainee.mealAcceptedCount}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          className={`${classes.gridItem} ${classes.bottomCenter}`}
        >
          <Typography variant={variant} align="center">
            {detainee.mealDeclinedCount}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          className={`${classes.gridItem} ${classes.bottomCenter}`}
        >
          <Typography variant={variant} align="center">
            {detainee.medicationAcceptedCount}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          className={`${classes.gridItem} ${classes.bottomRight}`}
        >
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
  },
  text: {
    textDecorationLine: 'underline',
  },
  topLeft: { borderWidth: '0 1px 1px 0' },
  topCenter: { borderWidth: '0 1px 1px 1px' },
  topRight: { borderWidth: '0 0 1px 1px' },
}))(ProvidedWelfareComponent);
