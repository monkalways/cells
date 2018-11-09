import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Grid, Typography, withStyles,
} from '@material-ui/core';

import CautionPresentIcon from '../../../images/CautionPresent.png';
import ContagiousIcon from '../../../images/Contagious.png';
import KeepAloneIcon from '../../../images/KeepAlone.png';
import MedicineAcceptIcon from '../../../images/MedicineAccept.png';
import OtherWarningIcon from '../../../images/OtherWarning.png';
import SuicideWarningIcon from '../../../images/SuicideWarning.png';

const CAUTION_PRESENT = 'CautionPresent';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  detainee: PropTypes.shape({
    withCaution: PropTypes.bool.isRequired,
    mustBeKeptAlone: PropTypes.bool.isRequired,
    isSuicidal: PropTypes.bool.isRequired,
    isContagious: PropTypes.bool.isRequired,
    hasWarning: PropTypes.bool.isRequired,
    isUnderMedication: PropTypes.bool.isRequired,
    cautionsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const NoticeComponent = ({ classes, detainee }) => {
  const renderWarnings = () => {
    const icons = [];
    if (detainee.withCaution) icons.push(CautionPresentIcon);
    if (detainee.mustBeKeptAlone) icons.push(KeepAloneIcon);
    if (detainee.isSuicidal) icons.push(SuicideWarningIcon);
    if (detainee.isContagious) icons.push(ContagiousIcon);
    if (detainee.hasWarning) icons.push(OtherWarningIcon);
    if (detainee.isUnderMedication) icons.push(MedicineAcceptIcon);

    return icons.map((icon) => {
      if (icon.includes(CAUTION_PRESENT)) {
        return (
          <Grid item key={icon}>
            <Avatar
              className={icons.length <= 3 ? classes.avatar3 : classes.avatar6}
              src={icon}
            />
            <Typography
              align="center"
              className={
                icons.length <= 3 ? classes.cautionText3 : classes.cautionText6
              }
            >
              {detainee.cautionsArray.join('')}
            </Typography>
          </Grid>
        );
      }
      return (
        <Grid item key={icon}>
          <Avatar
            className={icons.length <= 3 ? classes.avatar3 : classes.avatar6}
            src={icon}
          />
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={8} className={classes.grid}>
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.text}>
          Notice
        </Typography>
      </Grid>
      {renderWarnings()}
    </Grid>
  );
};

NoticeComponent.propTypes = propTypes;

export default withStyles((theme) => ({
  actions: {
    display: 'flex',
    height: theme.spacing.unit * 9,
  },
  avatar3: {
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit,
    display: 'block',
    zIndex: 99,
  },
  avatar6: {
    height: theme.spacing.unit * 4,
    width: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit,
    display: 'block',
  },
  cautionText3: {
    color: '#FFFFFF',
    backgroundColor: '#F80205',
    width: theme.spacing.unit * 6,
    fontWeight: theme.typography.caption.fontWeight,
    fontSize: theme.typography.caption.fontSize,
  },
  cautionText6: {
    color: '#FFFFFF',
    backgroundColor: '#F80205',
    width: theme.spacing.unit * 4,
    fontWeight: theme.typography.caption.fontWeight,
    fontSize: theme.typography.fontSize * 0.7,
  },
  grid: {
    padding: theme.spacing.unit * 0.5,
    height: theme.spacing.unit * 12,
  },
  text: {
    textDecoration: 'underline',
  },
}))(NoticeComponent);
