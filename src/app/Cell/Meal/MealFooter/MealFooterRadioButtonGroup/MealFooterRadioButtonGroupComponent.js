import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  withStyles,
} from '@material-ui/core';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const MealFooterRadioButtonGroup = ({ classes }) => (
  <RadioGroup name="MealRadio" className={classes.group} value="visual">
    <FormControlLabel
      value="accepted"
      control={<Radio className={classes.radioButton} />}
      label={<Typography variant="body1">Accepted - All</Typography>}
    />
    <FormControlLabel
      value="not-applicable"
      control={<Radio className={classes.radioButton} />}
      label={<Typography variant="body1">N/A - All</Typography>}
    />
  </RadioGroup>
);

MealFooterRadioButtonGroup.propTypes = propTypes;

export default withStyles((theme) => ({
  group: {
    marginTop: theme.spacing.unit * 0.7,
    marginLeft: -theme.spacing.unit * 15,
  },
  radioButton: {
    padding: theme.spacing.unit,
  },
}))(MealFooterRadioButtonGroup);
