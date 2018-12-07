import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Grid, Typography, withStyles,
} from '@material-ui/core';

import CautionPresentIcon from '../../images/CautionPresent.png';
import ContagiousIcon from '../../images/Contagious.png';
import KeepAloneIcon from '../../images/KeepAlone.png';
import MedicineAcceptIcon from '../../images/MedicineAccept.png';
import OtherWarningIcon from '../../images/OtherWarning.png';
import SuicideWarningIcon from '../../images/SuicideWarning.png';

const CAUTION_PRESENT = 'CautionPresent';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    cautionsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    hasWarning: PropTypes.bool.isRequired,
    isContagious: PropTypes.bool.isRequired,
    isSuicidal: PropTypes.bool.isRequired,
    isUnderMedication: PropTypes.bool.isRequired,
    mustBeKeptAlone: PropTypes.bool.isRequired,
    withCaution: PropTypes.bool.isRequired,
  }).isRequired,
};

export const NoticeComponent = ({ classes, detainee }) => {
  const renderWarnings = () => {
    const {
      cautionsArray,
      hasWarning,
      isContagious,
      isSuicidal,
      isUnderMedication,
      mustBeKeptAlone,
      withCaution,
    } = detainee;
    const icons = [];

    if (withCaution) icons.push(CautionPresentIcon);
    if (mustBeKeptAlone) icons.push(KeepAloneIcon);
    if (isSuicidal) icons.push(SuicideWarningIcon);
    if (isContagious) icons.push(ContagiousIcon);
    if (hasWarning) icons.push(OtherWarningIcon);
    if (isUnderMedication) icons.push(MedicineAcceptIcon);

    return icons.map((icon) => {
      if (icon.includes(CAUTION_PRESENT)) {
        return (
          <Grid item container key={icon} className={classes.gridItem}>
            <Grid item xs={12}>
              <Avatar className={classes.avatar} src={icon} />
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" className={classes.cautionText}>
                {cautionsArray.sort().join('')}
              </Typography>
            </Grid>
          </Grid>
        );
      }
      return (
        <Grid item key={icon} className={classes.gridItem}>
          <Avatar className={classes.avatar} src={icon} />
        </Grid>
      );
    });
  };

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.text}>
          Notice
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        {renderWarnings()}
      </Grid>
    </Grid>
  );
};

NoticeComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  avatar: {
    height: theme.spacing.unit * 8,
    width: theme.spacing.unit * 8,
    zIndex: 99,
  },
  cautionText: {
    color: '#FFFFFF',
    backgroundColor: '#F80205',
    width: theme.spacing.unit * 8,
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
  },
  grid: {
    padding: theme.spacing.unit * 0.5,
    minHeight: theme.spacing.unit * 12,
  },
  gridItem: {
    padding: theme.spacing.unit * 0.5,
    width: theme.spacing.unit * 10,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    textDecoration: 'underline',
  },
}))(NoticeComponent);
