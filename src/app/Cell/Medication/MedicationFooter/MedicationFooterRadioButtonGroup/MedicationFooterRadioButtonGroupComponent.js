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
  radioButtonValue: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onRadioGroupChange: PropTypes.func.isRequired,
};

const MedicationFooterRadioButtonGroup = ({
  classes,
  radioButtonValue,
  disabled,
  onRadioGroupChange,
}) => (
  <RadioGroup
    name="MedicationRadio"
    className={classes.group}
    value={radioButtonValue}
    onChange={onRadioGroupChange}
  >
    <FormControlLabel
      value="accept"
      control={<Radio className={classes.radioButton} />}
      label={<Typography variant="body1">Accepted - All</Typography>}
      disabled={disabled}
    />
    <FormControlLabel
      value="not-applicable"
      control={<Radio className={classes.radioButton} />}
      label={<Typography variant="body1">N/A - All</Typography>}
      disabled={disabled}
    />
  </RadioGroup>
);

MedicationFooterRadioButtonGroup.propTypes = propTypes;

export default withStyles((theme) => ({
  group: {
    marginTop: theme.spacing.unit * 0.7,
    marginLeft: -theme.spacing.unit * 15,
  },
  radioButton: {
    padding: theme.spacing.unit,
  },
}))(MedicationFooterRadioButtonGroup);
