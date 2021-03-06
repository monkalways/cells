import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, CardActions, Typography, withStyles,
} from '@material-ui/core';

import CautionPresentIcon from '../../../../images/CautionPresent.png';
import ContagiousIcon from '../../../../images/Contagious.png';
import KeepAloneIcon from '../../../../images/KeepAlone.png';
import MedicineAcceptIcon from '../../../../images/MedicineAccept.png';
import OtherWarningIcon from '../../../../images/OtherWarning.png';
import SuicideWarningIcon from '../../../../images/SuicideWarning.png';

const CAUTION_PRESENT = 'CautionPresent';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  cellDetainee: PropTypes.shape({
    withCaution: PropTypes.bool,
    mustBeKeptAlone: PropTypes.bool,
    isSuicidal: PropTypes.bool,
    isContagious: PropTypes.bool,
    hasWarning: PropTypes.bool,
    isUnderMedication: PropTypes.bool,
    cautionsArray: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export const CardFooterComponent = ({
  classes,
  cellDetainee,
  isAuthenticated,
}) => {
  const renderWarnings = () => {
    const icons = [];
    if (cellDetainee.withCaution) icons.push(CautionPresentIcon);
    if (cellDetainee.mustBeKeptAlone) icons.push(KeepAloneIcon);
    if (cellDetainee.isSuicidal) icons.push(SuicideWarningIcon);
    if (cellDetainee.isContagious) icons.push(ContagiousIcon);
    if (cellDetainee.hasWarning) icons.push(OtherWarningIcon);
    if (cellDetainee.isUnderMedication) icons.push(MedicineAcceptIcon);

    return icons.map((icon) => {
      if (icon.includes(CAUTION_PRESENT)) {
        return (
          <div key={icon}>
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
              {cellDetainee.cautionsArray.sort().join('')}
            </Typography>
          </div>
        );
      }
      return (
        <Avatar
          key={icon}
          className={icons.length <= 3 ? classes.avatar3 : classes.avatar6}
          src={icon}
        />
      );
    });
  };

  return (
    <CardActions className={classes.actions} disableActionSpacing>
      {isAuthenticated && renderWarnings()}
    </CardActions>
  );
};

CardFooterComponent.propTypes = propTypes;

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
    height: theme.spacing.unit * 3.5,
    width: theme.spacing.unit * 3.5,
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
}))(CardFooterComponent);
